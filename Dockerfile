FROM python:3.11
ENV PYTHONDONTWRITEBYCODE 1
ENV PYTHONUNBUFFERED 1
COPY . /core
WORKDIR /core
RUN pip install -r requirements.txt
#RUN python manage.py makemigrations
#RUN python manage.py migrate
#CMD gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 portfolio.wsgi
CMD["python", "manage.py", "runserver", "0.0.00:8000"]