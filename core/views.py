from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Subscriber
import json


def home(request):
    return render(request, 'index.html')


@csrf_exempt
def contact(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        send_mail(
            'Contact Form Submission',
            f'Name: {name}\nEmail: {email}\nMessage: {message}',
            'settings.EMAIL_HOST_USER',
            [email],
            fail_silently=False,
        )

        return JsonResponse({'success': True})
    return JsonResponse({'success': False})


@csrf_exempt
def subscribe_newsletter(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')

        # check if email is valid (e.g., regex validation) and already subscribed'

        if not email:
            return JsonResponse({'success': False, 'message': 'Email is required'}, status=400)

        if Subscriber.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': 'Email is already subscribed'}, status=400)

        # Save the subscriber to the database
        subscribe = Subscriber(email=email)
        subscribe.save()

        return JsonResponse({'success': True, 'message': 'Subscribed successfully'})
    return JsonResponse({"success": False, 'message': 'Invalid request'}, status=405)
