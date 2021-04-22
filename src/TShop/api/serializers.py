from profiles.models import Profile
from orders.models import Order
from orderitems.models import OrderItem
from items.models import Item
from shipments.models import ShippingDetail
from rest_framework import serializers

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingDetail
        fields = '__all__'

