from django.shortcuts import render, redirect
from .models import Book
from .forms import BookForm

def BookCreateView(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        #l_content = f"['{form.content}']"
        if form.is_valid():
            form.save()
            return redirect('create_book')  # Kitap ekledikten sonra kitap listesine yönlendir
    else:
        form = BookForm()
    
    return render(request, 'book/create_book.html', {'form': form})

def book_list(request):
    books = Book.objects.all()
    # for book in books:
    #     print(book.content)
    return render(request, 'book/book_list.html', {'books': books})
