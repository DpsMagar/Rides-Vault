from rest_framework import serializers
from .models import Helmet, Boot, Pants, Jacket, Glove

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
