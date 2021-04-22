from django.db import models
from profiles.models import Profile
import string
import random

# Create your models here.
def generate_unique_order_num():
    while True:
        order_num = ''.join(random.choices(string.digits,k=LENGTH))
        if Order.objects.filter(order_num=order_num).count()==0:
            break

    return order_num

class Order(models.Model):
    order_num           = models.CharField(max_length=8, unique=True)
    order_date          = models.DateTimeField(auto_now_add= True)
    username            = models.ForeignKey(Profile, on_delete=models.CASCADE)
    order_price         = models.DecimalField( max_digits=6, decimal_places=2)
