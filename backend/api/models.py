from django.db import models
from django.contrib.auth.models import User


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
    image = models.ImageField(upload_to='cart_items', null=True, blank=True)

    
    def save(self, *args, **kwargs):
        self.total_price = self.price * self.quantity
        super().save(*args, **kwargs)
        
#for later use(using the invoices)
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    item_type = models.CharField(max_length=50)  
    item_id = models.PositiveIntegerField()  
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    ordered_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='order_items', null=True, blank=True)

    
class Bookmarks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmarks')
    item_type = models.CharField(max_length=50)  
    item_id = models.PositiveIntegerField()  
    bookmarked_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='bookmarked_items', null=True, blank=True)


    def __str__(self):
        return f"{self.user.username}'s Bookmark - {self.item_type} ID {self.item_id}"