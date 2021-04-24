from django.db import models
import string
import random

variation_list = (
    ('red', 'red'),
    ('green', 'green'),
    ('blue','blue'),
)
LENGTH = 6
# Create your models here.
def generate_unique_item_id():
    while True:
        item_id = ''.join(random.choices(string.digits,k=LENGTH))
        if Item.objects.filter(item_id=item_id).count()==0:
            break

    return item_id


class Item (models.Model):
    item_id             = models.CharField(max_length=8,default=generate_unique_item_id, unique=True)
    item_title          = models.CharField(max_length=48, unique=True)
    item_price          = models.DecimalField( max_digits=4, decimal_places=2)
    date_added          = models.DateTimeField(auto_now_add=True)
    variations          = models.CharField(max_length=24,choices=variation_list,default=None)