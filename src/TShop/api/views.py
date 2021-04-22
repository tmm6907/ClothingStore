from rest_framework import generics
from profiles.models import Profile
from orders.models import Order
from orderitems.models import OrderItem
from items.models import Item
from shipments.models import ShippingDetail
from rest_framework import serializers
from .serializers import ProfileSerializer,OrderSerializer, OrderItemSerializer, ItemSerializer, ShipmentSerializer

# Create your views here.

class ProfileListAPI(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class OrderListAPI(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemsListAPI(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class ItemListAPI(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ShippingDetailListAPI(generics.ListCreateAPIView):
    queryset = ShippingDetail.objects.all()
    serializer_class = ShipmentSerializer