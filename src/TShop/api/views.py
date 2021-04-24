from rest_framework import generics
from profiles.models import Profile
from orders.models import Order
from orderitems.models import OrderItem
from items.models import Item
from shipments.models import ShippingDetail
from shipping.models import Shipping
from rest_framework import serializers
from .serializers import ProfileSerializer,OrderSerializer, OrderItemSerializer, ItemSerializer, ShipmentSerializer, ShippingSerializer

# Create your views here.

class ProfileListCreateAPI(generics.ListCreateAPIView,
generics.mixins.UpdateModelMixin,
generics.mixins.DestroyModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class OrderListCreateAPI(generics.ListCreateAPIView,
generics.mixins.DestroyModelMixin):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemsCreateListAPI(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class ItemListAPI(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ShippingDetailListCreateAPI(generics.ListCreateAPIView):
    queryset = ShippingDetail.objects.all()
    serializer_class = ShipmentSerializer

class ShippingListCreateAPI(generics.ListCreateAPIView,
generics.mixins.UpdateModelMixin):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer