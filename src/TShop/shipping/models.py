from django.db import models
from profiles.models import Profile
from address.models import AddressField

# Create your models here.

class Shipping(models.Model):
    username                = models.ForeignKey(Profile, on_delete=models.CASCADE)
    address1                = AddressField()
    address2                = AddressField(related_name='+', blank=True, null=True)