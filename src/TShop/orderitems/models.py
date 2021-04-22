from django.db import models
from orders.models import Order
from items.models import Item
from .modelFields import IntegerRangeField

# Create your models here.
class OrderItem(models.Model):
    order_num           = models.ForeignKey(Order, on_delete=models.CASCADE)
    item_id             = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity            = IntegerRangeField(min_value=1, max_value=100)
    price               = models.DecimalField( max_digits=6, decimal_places=2)