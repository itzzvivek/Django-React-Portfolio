pip install -r requirements.txt
python 3.11 manage.py collectstatic
python manage.py migrate
python mange.py runserver