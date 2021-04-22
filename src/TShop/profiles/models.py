from django.db import models
from django.contrib.auth.models import User
from address.models import AddressField

# Create your models here.

class Profile(User):
    bill_address        = AddressField()
    ship_address1       = AddressField(related_name='ad1')
    ship_address2       = AddressField(related_name='ad2', blank=True, null=True)
