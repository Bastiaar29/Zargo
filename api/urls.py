from django.urls import path
from .views import register, login_view

urlpatterns = [
    path('register/', register, name='register'),  # Ruta para registro
    path('login/', login_view, name='login'),      # Ruta para login
]
