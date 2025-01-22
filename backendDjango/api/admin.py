from django.contrib import admin
from .models import Helmet, Boot, Pants, Jacket, Glove, Cart, Bookmarks, Order, orderItem

# Register your models here.



class OrderItemInline(admin.TabularInline):
    model= orderItem
    extra=0
    fields= ('name', 'quantity', 'price', 'total_price')
    
class OrderAdmin(admin.ModelAdmin):
    ist_display=('id','name', 'total_price', 'ordered_at')
    inlines=[OrderItemInline]
    
admin.site.register(Helmet)
admin.site.register(Boot)
admin.site.register(Pants)
admin.site.register(Jacket)
admin.site.register(Glove)
admin.site.register(Cart)
admin.site.register(Bookmarks)
admin.site.register(Order, OrderAdmin)
# admin.site.register(Order)
