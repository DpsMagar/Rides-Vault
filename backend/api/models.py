from django.db import models

class Helmet(models.Model):
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    safety_rating = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} Helmet ({self.size})"


class Boot(models.Model):
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    waterproof = models.BooleanField(default=False)
    stock_quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} Boot ({self.size})"


class Pants(models.Model):
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    material = models.CharField(max_length=100)
    stock_quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} Pants ({self.size})"


class Jacket(models.Model):
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    insulation_type = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} Jacket ({self.size})"


class Glove(models.Model):
    brand = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    grip_type = models.CharField(max_length=50)
    stock_quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} Glove ({self.size})"
