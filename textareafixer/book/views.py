from django.shortcuts import render, redirect
from .models import Book
from .forms import BookForm

def BookCreateView(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            book = form.save(commit=False)
            book.content = f"['{book.content}']"
            book.save()
            return redirect('book_list') 
    else:
        form = BookForm()
    
    return render(request, 'book/create_book.html', {'form': form})

def book_list(request):
    books = Book.objects.all()
    return render(request, 'book/book_list.html', {'books': books})
