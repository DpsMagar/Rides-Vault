# Generated by Django 5.0.9 on 2024-11-17 14:47

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_cart_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_number',
            field=models.CharField(default=api.models.generate_order_number, max_length=5, unique=True),
        ),
    ]
