from profiles.models import Profile
from orders.models import Order
from orderitems.models import OrderItem
from items.models import Item
from shipments.models import ShippingDetail
from shipping.models import Shipping
from rest_framework import serializers

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('order_price')

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('item_id','quantity')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        
class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingDetail
        fields = '__all__'

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ('address1', 'address2')

