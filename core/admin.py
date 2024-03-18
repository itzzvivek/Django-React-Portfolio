from django.contrib import admin
from .models import NewsletterUser, Subscriber

admin.site.register(NewsletterUser)
admin.site.register(Subscriber)

