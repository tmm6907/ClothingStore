
from django.urls import path
from .views import index_view

urlpatterns = [
    path('',index_view),
    path('profile/', index_view),
    path('about/', index_view),
    path('womens/', index_view),
    path('mens/', index_view),
    path('cart/', index_view),
    path('sale/', index_view),
    path('accessories/', index_view),
]
