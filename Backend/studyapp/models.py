from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to="profile_pictures/", null=True, blank=True)

class Subject(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description =  models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="tasks", blank=True, null=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Schedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="schedules", blank=True, null=True)

    def __str__(self):
        return f"{self.date} - {self.start_time} to {self.end_time}"
    
class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name="reminders", blank=True, null=True)
    reminder_time = models.DateTimeField()

    def __str__(self):
        return f"Reminder for {self.task.title} at {self.reminder_time}"
    
class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="progress", blank=True, null=True)
    completed_tasks = models.IntegerField(default=0)
    total_tasks = models.IntegerField(default=0)

    def completion_percentage(self):
        if self.total_tasks == 0:
            return 0
        return (self.completed_tasks / self.total_tasks) * 100

    def __str__(self):
        return f"{self.subject.name} - {self.completion_percentage()}%"