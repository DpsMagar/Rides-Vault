from django.db import models
from django.contrib.auth.models import User
import random
import string


#for later use(using the invoices)
def generate_order_number():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))


class Order(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE, related_name='order')
    order_number= models.CharField(max_length=10, default=generate_order_number, unique=True)
    total_price= models.DecimalField(max_digits=10, decimal_places=0, default=0)
    ordered_at= models.DateTimeField(auto_now_add=True)
    is_processed= models.BooleanField(default=False)
    
    def __str__(self):
        return f"Order {self.order_number} by {self.user.username} which totals {self.total_price}"
    
    def update_total_price(self):
        self.total_price= sum(item.total_price for  item in self.items.all() )
        self.save()
    
    @property
    def user_name(self):
        return self.user.username
        
class orderItem(models.Model):
    order= models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    name=models.CharField( max_length=40)
    quantity= models.PositiveIntegerField(default= 1)
    price= models.PositiveIntegerField()  #Price per unit
    total_price= models.DecimalField(max_digits=10, decimal_places=0)
    image= models.URLField(null=True, blank=True)
    
    def save(self, *args, **kwargs):
        self.total_price= self.quantity* self.price
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.quantity} x {self.name} (Order: {self.order.order_number})"

class Helmet(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    safety_rating = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='helmets', null=True, blank=True)
    
    def __str__(self):
        return f"{self.brand} Helmet ({self.size})"


class Boot(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    waterproof = models.BooleanField(default=False)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='boots', null=True, blank=True)

    def __str__(self):
        return f"{self.brand} Boot ({self.size})"


class Pants(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='Pants', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Pants ({self.size})"


class Jacket(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='jackets', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Jacket ({self.size})"


class Glove(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='gloves', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Glove ({self.size})"

class Cart(models.Model):
    user= models.ForeignKey(User,on_delete=models.CASCADE, related_name='cart_items')
    name= models.CharField(max_length=40)
    quantity= models.IntegerField(default=1)
    item_type= models.CharField(max_length=50)
    price= models.IntegerField()
    added_at= models.DateField(auto_now_add=True)
    total_price= models.IntegerField()
    image = models.URLField()
    # image = models.ImageField(upload_to='cart_items', null=True, blank=True)
    is_processed= models.BooleanField(default=False)


    
    def save(self, *args, **kwargs):
        self.total_price = self.price * self.quantity
        super().save(*args, **kwargs)
        


# class Order(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
#     name= models.CharField(max_length=40, default='Unknown')
#     quantity= models.IntegerField(default=1)
#     price = models.PositiveIntegerField(default=0)
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     ordered_at = models.DateTimeField(auto_now_add=True)
#     image = models.URLField( null=True)
#     order_number = models.CharField(max_length=5, default=generate_order_number, unique=True)
#     is_processed= models.BooleanField(default=False)

#     def __str__(self):
#         return self.order_number
    
#     def save(self, *args, **kwargs):
#         self. total_price= self.price * self.quantity
#         super().save(*args, **kwargs)



        
class Bookmarks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmarks')
    item_type = models.CharField(max_length=50)  
    item_id = models.PositiveIntegerField()  
    bookmarked_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='bookmarked_items', null=True, blank=True)


    def __str__(self):
        return f"{self.user.username}'s Bookmark - {self.item_type} ID {self.item_id}"