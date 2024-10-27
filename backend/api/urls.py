from django.urls import path
from .views import HelmetViewSet, BootViewSet, PantsViewSet, JacketViewSet, GloveViewSet

urlpatterns = [
    # Helmet URLs
    path('helmets/', HelmetViewSet.as_view({'get': 'list', 'post': 'create'}), name='helmet-list'),
    path('helmets/<int:pk>/', HelmetViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='helmet-detail'),

    # Boot URLs
    path('boots/', BootViewSet.as_view({'get': 'list', 'post': 'create'}), name='boot-list'),
    path('boots/<int:pk>/', BootViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='boot-detail'),

    # Pants URLs
    path('pants/', PantsViewSet.as_view({'get': 'list', 'post': 'create'}), name='pants-list'),
    path('pants/<int:pk>/', PantsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='pants-detail'),

    # Jacket URLs
    path('jackets/', JacketViewSet.as_view({'get': 'list', 'post': 'create'}), name='jacket-list'),
    path('jackets/<int:pk>/', JacketViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='jacket-detail'),

    # Glove URLs
    path('gloves/', GloveViewSet.as_view({'get': 'list', 'post': 'create'}), name='glove-list'),
    path('gloves/<int:pk>/', GloveViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='glove-detail'),
]
