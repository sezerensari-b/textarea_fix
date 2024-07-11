from django.urls import path
from . import views

urlpatterns = [
    path("create/", views.BookCreateView, name="create_book"),
    path("", views.book_list, name="book_list"),
]
