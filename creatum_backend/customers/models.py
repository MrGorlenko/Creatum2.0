from django.db import models


class Customer(models.Model):
    full_name = models.CharField(max_length=150, verbose_name='Полное имя')
    url = models.TextField(verbose_name='Ссылка на сайт компании', blank=True, null=True)
    email = models.EmailField(verbose_name='Почта')
    industry = models.CharField(max_length=100, verbose_name='Направление', blank=True, null=True)
    text = models.TextField(verbose_name='Текст', blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return f'{self.full_name}'
