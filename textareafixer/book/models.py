from django.db import models


class Book(models.Model):
    content = models.TextField()

    def __str__(self):
        return f"Book {self.id}"

    @property
    def trimmed_content(self):
        if len(self.content) >= 4:
            return self.content[2:-2]
        else:
            return self.content
