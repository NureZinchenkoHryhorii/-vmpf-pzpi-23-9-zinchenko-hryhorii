from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    publish_date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Comment(models.Model):
    author = models.CharField(max_length=100)
    text = models.TextField()
    comment_date = models.DateField()
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.author