'''TShop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
'''
from django.contrib import admin
from django.urls import path
from .views import *

app_name = 'api'

urlpatterns = [
    path('profiles/', ProfileListCreateAPI.as_view(), name='profiles'),
    path('orders/', OrderListCreateAPI.as_view(), name='orders'),
    path('orderitems/', OrderItemsCreateListAPI.as_view(), name='orderitems'),
    path('items/', ItemListAPI.as_view(), name='items'),
    path('shipdetails/', ShippingDetailListCreateAPI.as_view(), name='shipdetails'),
    path('shipping/', ShippingListCreateAPI.as_view(), name='shipping'),
]
