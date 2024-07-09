from django.db import models

class Book(models.Model):
    content = models.TextField()

    def __str__(self):
        return f"Book {self.id}"    
