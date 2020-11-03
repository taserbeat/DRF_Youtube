from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views import VideoViewSet, CreateUserView

router = routers.DefaultRouter()
router.register('videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create/', CreateUserView.as_view(), name='create'),  # genericsから継承したviewはas_view()が必要
]
