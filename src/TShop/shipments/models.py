from django.db import models
from profiles.models import Profile
from orders.models import Order
import string
import random

LENGTH = 6

# Create your models here.
def generate_unique_ship_id():
    while True:
        ship_id = ''.join(random.choices(string.digits,k=LENGTH))
        if ShippingDetail.objects.filter(ship_id=ship_id).count()==0:
            break

    return ship_id

class ShippingDetail(models.Model):
    order_num           = models.ForeignKey(Order, on_delete=models.CASCADE)
    ship_id             = models.CharField(max_length=8,default=generate_unique_ship_id, unique=True)
    ship_date           = models.DateTimeField(auto_now_add=True)