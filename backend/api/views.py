from rest_framework import viewsets
from .models import Helmet, Boot, Pants, Jacket, Glove, Bookmarks, Cart, Order
from .serializers import (
    HelmetSerializer, BootSerializer, PantsSerializer, JacketSerializer, 
    GloveSerializer, UserSerializer, LoginSerializer, 
    BookmarkSerializer, CartSerializer, OrderSerializer
)
from rest_framework import generics, status, serializers
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.db.models import F
from django.db import transaction


class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'name': user.username,
        })


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmarks.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Bookmarks.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        user = self.request.user
        data = self.request.data
        name = data.get('name')
        item_type = data.get('item_type')
        existing_cart_item = Cart.objects.filter(user=user, name=name, item_type=item_type).first()

        if existing_cart_item:
            existing_cart_item.quantity = F('quantity') + data.get('quantity', 1)
            existing_cart_item.save()
            existing_cart_item.refresh_from_db()
            return Response({
                "message": "Item quantity updated successfully!",
                "cart_item": CartSerializer(existing_cart_item).data
            }, status=status.HTTP_200_OK)

        serializer.save(user=user)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        data = request.data
        user = request.user
        response_data = {"orders": []}

        with transaction.atomic():
            unprocessed_orders = Order.objects.filter(user=user, is_processed=False)
            unprocessed_orders.delete()

            if isinstance(data, list):
                for item in data:
                    serializer = self.get_serializer(data=item)
                    serializer.is_valid(raise_exception=True)
                    serializer.save(user=request.user, is_processed=False)
                    response_data["orders"].append(serializer.data)
            else:
                serializer = self.get_serializer(data=data)
                serializer.is_valid(raise_exception=True)
                serializer.save(user=request.user, is_processed=False)
                response_data["orders"].append(serializer.data)

        return Response(response_data, status=status.HTTP_201_CREATED)


class HelmetViewSet(viewsets.ModelViewSet):
    queryset = Helmet.objects.all()
    serializer_class = HelmetSerializer


class BootViewSet(viewsets.ModelViewSet):
    queryset = Boot.objects.all()
    serializer_class = BootSerializer


class PantsViewSet(viewsets.ModelViewSet):
    queryset = Pants.objects.all()
    serializer_class = PantsSerializer


class JacketViewSet(viewsets.ModelViewSet):
    queryset = Jacket.objects.all()
    serializer_class = JacketSerializer


class GloveViewSet(viewsets.ModelViewSet):
    queryset = Glove.objects.all()
    serializer_class = GloveSerializer
