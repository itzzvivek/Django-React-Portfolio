from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("contact/", views.contact, name="contact"),
    path("subscribe/", views.subscribe_newsletter, name="subscribe-newsletter"),
    path("unsubscribe/<str:unsubscribe_token>/", views.unsubscribe_newsletter, name="unsubscribe-newsletter"),
]

