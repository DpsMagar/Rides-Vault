from django.db import models

class Helmet(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
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
    price = models.DecimalField(max_digits=10, decimal_places=2)
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
    price = models.DecimalField(max_digits=10, decimal_places=2)
    material = models.CharField(max_length=100)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='Pants', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Pants ({self.size})"


class Jacket(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    insulation_type = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='jackets', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Jacket ({self.size})"


class Glove(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    grip_type = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()
    image=models.ImageField(upload_to='gloves', null=True, blank=True)
    

    def __str__(self):
        return f"{self.brand} Glove ({self.size})"
