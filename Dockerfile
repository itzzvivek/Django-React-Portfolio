FROM python:3.11
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /core
COPY requirements.txt /core/
RUN pip install -r requirements.txt
COPY . /core/
# RUN python manage.py makemigrations
# RUN python manage.py migrate
# CMD gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 portfolio.wsgi
CMD ["python", "manage.py", "server", "0.0.0.0:8000"]