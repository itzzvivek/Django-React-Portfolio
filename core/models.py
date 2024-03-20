from django.db import models
from django.utils import timezone
from django.utils.crypto import get_random_string


class Subscriber(models.Model):
    email = models.EmailField(null=True)
    created_at = models.DateTimeField(default=timezone.now)
    unsubscribe_token = models.CharField(max_length=32, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.unsubscribe_token:
            self.unsubscribe_token = get_random_string(length=32)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email
