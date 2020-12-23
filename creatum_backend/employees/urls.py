from .views import EmployeeViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('employees', EmployeeViewset, basename='employees')

urlpatterns = router.urls
