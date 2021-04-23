from django.db import models
from django.contrib.auth.models import User
from address.models import AddressField

# Create your models here.

class Profile(User):
    bill_address        = AddressField()
    
