from django.shortcuts import render, redirect
from .models import Book
from .forms import BookForm

def BookCreateView(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('book_list')  # Kitap ekledikten sonra kitap listesine yönlendir
    else:
        form = BookForm()
    
    return render(request, 'book/create_book.html', {'form': form})

def book_list(request):
    books = Book.objects.all()
    return render(request, 'book/book_list.html', {'books': books})
