from rest_framework import viewsets
from .models import Helmet, Boot, Pants, Jacket, Glove
from .serializers import HelmetSerializer, BootSerializer, PantsSerializer, JacketSerializer, GloveSerializer

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
