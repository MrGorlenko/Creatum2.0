from django.contrib import admin
from .models import Employee


@admin.register(Employee)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'field', 'date_created']
