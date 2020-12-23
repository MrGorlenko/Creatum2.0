from .views import CustomerViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('customers', CustomerViewset, basename='customers')

urlpatterns = router.urls
