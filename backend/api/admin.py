from django.contrib import admin
from .models import Helmet, Boot, Pants, Jacket, Glove

# Register your models here.
admin.site.register(Helmet)
admin.site.register(Boot)
admin.site.register(Pants)
admin.site.register(Jacket)
admin.site.register(Glove)