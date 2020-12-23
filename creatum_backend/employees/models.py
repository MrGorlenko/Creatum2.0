from django.db import models


class Employee(models.Model):
    full_name = models.CharField(max_length=150, verbose_name='Полное имя')
    email = models.EmailField(verbose_name='Почта')
    field = models.TextField(verbose_name='Направление')
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return f'{self.full_name}'