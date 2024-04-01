from django.shortcuts import render
from django.core.mail import send_mail, EmailMultiAlternatives
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from .models import Subscriber
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.shortcuts import get_object_or_404, Http404
from django.utils.crypto import get_random_string
import json
import re


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
            settings.EMAIL_HOST_USER,
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

        if not email or not re.match(r'^[\w\.-]+@[\w\.-]+$', email):
            return JsonResponse({'success': False, 'message': 'Email is required'}, status=400)

        if Subscriber.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': 'Email is already subscribed'}, status=400)

        user, created = Subscriber.objects.get_or_create(email=email)
        if created or not user.unsubscribe_token:
            user.unsubscribe_token = get_random_string(length=32)
            user.save()

        # Save the subscriber to the database
        subject = 'Thankyou for subscribe newsletter'
        to_email = [email]
        unsubscribe_link = "http://localhost:8000/unsubscribe/{}/".format(user.unsubscribe_token)
        context = {
            'unsubscribe_link': unsubscribe_link
        }
        html_temp = render_to_string('subscribeMail.html', context)
        body = strip_tags(html_temp)
        message = EmailMultiAlternatives(
            subject=subject,
            body=body,
            from_email=settings.EMAIL_HOST_USER,
            to=to_email,
        )
        message.attach_alternative(html_temp, "text/html")
        message.send()

        # subscribe = Subscriber(email=email)
        # subscribe.save()

        return JsonResponse({'success': True, 'message': 'Subscribed successfully'})
    return JsonResponse({"success": False, 'message': 'Invalid request'}, status=405)


def unsubscribe_newsletter(request, unsubscribe_token):
    user = get_object_or_404(Subscriber, unsubscribe_token=unsubscribe_token)
    if user.email:
        user.delete()
        messages.success(request, 'You have successfully unsubscribe')
    else:
        messages.error(request, "Invalid unsubscribe link")
        raise Http404("Invalid unsubscribe link.")

    return render(request, "unsubscribeMsg.html")
