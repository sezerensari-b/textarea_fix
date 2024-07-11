from django.shortcuts import render, redirect
from .models import Book


def BookCreateView(request):
    if request.method == "POST":
        content = request.POST.getlist("content")
        if content:
            Book.objects.create(content=content)
            return redirect("book_list")
    else:
        return render(request, "book/create_book.html")
    return render(request, "book/create_book.html")


def book_list(request):
    books = Book.objects.all()
    for book in books:
        print(repr(book.content))
    return render(request, "book/book_list.html", {"books": books})
