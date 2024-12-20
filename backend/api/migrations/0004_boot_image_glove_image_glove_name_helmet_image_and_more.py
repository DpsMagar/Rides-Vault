# Generated by Django 5.0.9 on 2024-11-09 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_helmet_name_alter_boot_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='boot',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='boots'),
        ),
        migrations.AddField(
            model_name='glove',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='gloves'),
        ),
        migrations.AddField(
            model_name='glove',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='helmet',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='helmets'),
        ),
        migrations.AddField(
            model_name='jacket',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='jackets'),
        ),
        migrations.AddField(
            model_name='jacket',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='pants',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='Pants'),
        ),
        migrations.AddField(
            model_name='pants',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='boot',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='helmet',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
