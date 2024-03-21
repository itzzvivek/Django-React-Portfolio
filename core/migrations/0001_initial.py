# Generated by Django 5.0.2 on 2024-03-21 08:30

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('unsubscribe_token', models.CharField(blank=True, max_length=32, unique=True)),
            ],
        ),
    ]
