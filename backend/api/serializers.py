from rest_framework import serializers
from .models import Helmet, Boot, Pants, Jacket, Glove
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields= ('id', 'username', 'email', 'password')
        extra_kwargs= {'password':{'write_only': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
    
class LoginSerializer(serializers.Serializer):
    username= serializers.CharField()
    password= serializers.CharField(write_only= True)
    
    def validate(self, data):
        user= authenticate(**data)
        if user and user.is_active:
            return user
        return serializers.ValidationError("Invalid Credentials")

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
