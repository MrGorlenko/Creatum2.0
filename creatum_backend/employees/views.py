from django.shortcuts import render

from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework import viewsets


class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
