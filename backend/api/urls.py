from django.urls import path
from .views import HelmetViewSet, BootViewSet, PantsViewSet, JacketViewSet, GloveViewSet, RegisterView, LoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # Helmet URLs
    path('helmet/', HelmetViewSet.as_view({'get': 'list', 'post': 'create'}), name='helmet-list'),
    path('helmet/<int:pk>/', HelmetViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='helmet-detail'),

    # Boot URLs
    path('boot/', BootViewSet.as_view({'get': 'list', 'post': 'create'}), name='boot-list'),
    path('boot/<int:pk>/', BootViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='boot-detail'),

    # Pants URLs
    path('pant/', PantsViewSet.as_view({'get': 'list', 'post': 'create'}), name='pants-list'),
    path('pant/<int:pk>/', PantsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='pants-detail'),

    # Jacket URLs
    path('jacket/', JacketViewSet.as_view({'get': 'list', 'post': 'create'}), name='jacket-list'),
    path('jacket/<int:pk>/', JacketViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='jacket-detail'),

    # Glove URLs
    path('glove/', GloveViewSet.as_view({'get': 'list', 'post': 'create'}), name='glove-list'),
    path('glove/<int:pk>/', GloveViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='glove-detail'),
    
    #For the authentication
    path('token', TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]
