from django.db import models


class Todo(models.Model):
    item = models.CharField(max_length=200)
    complete = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item

    def save(self, *args, **kwargs):
        # if not self.code:
        #     self.code = str(uuid.uuid4()).replace("-", "").upper()[:12]
        super().save(*args, **kwargs)
