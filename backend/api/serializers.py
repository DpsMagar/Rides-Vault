from rest_framework import serializers
from .models import Helmet, Boot, Pants, Jacket, Glove, Bookmarks, Cart, Order
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import ValidationError


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        if User.objects.filter(email=validated_data['email']).exists():
            raise ValidationError({"email": "This email is already registered."})
        
        if User.objects.filter(username=validated_data['username']).exists():
            raise ValidationError({"username": "This username is already taken."})

        return User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
    
    def validate_username(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Username must be at least 5 characters long.")
        return value

    def validate_email(self, value):
        if '@' not in value:
            raise serializers.ValidationError("Please provide a valid email address.")
        return value
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist.")

        user = authenticate(username=user.username, password=password)

        if user is None:
            raise serializers.ValidationError("Invalid email or password.")
        
        data["user"] = user
        return data

class HelmetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Helmet
        fields = '__all__'


class BootSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boot
        fields = '__all__'


class PantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pants
        fields = '__all__'


class JacketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jacket
        fields = '__all__'


class GloveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Glove
        fields = '__all__'
        
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'user', 'item_type', 'name', 'price', 'quantity', 'image', 'added_at', 'total_price', 'is_processed']
        read_only_fields = ['total_price','user']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'name', 'price', 'quantity', 'image', 'total_price', 'ordered_at', 'order_number']
        read_only_fields = ['order_number','total_price','user']

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ['id', 'user', 'item_type', 'name', 'price', 'image', 'bookmarked_at']
        
