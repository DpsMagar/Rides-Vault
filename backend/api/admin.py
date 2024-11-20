from django.contrib import admin
from .models import Helmet, Boot, Pants, Jacket, Glove, Cart, Bookmarks, Order

# Register your models here.

class OrderAdmin(admin.ModelAdmin):
    list_display=('name', 'total_price', 'ordered_at')
    
    
admin.site.register(Helmet)
admin.site.register(Boot)
admin.site.register(Pants)
admin.site.register(Jacket)
admin.site.register(Glove)
admin.site.register(Cart)
admin.site.register(Bookmarks)
admin.site.register(Order, OrderAdmin)
