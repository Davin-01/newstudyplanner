from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User, Subject, Task, Schedule, Reminder, Progress

admin.site.register(User)
admin.site.register(Subject)
admin.site.register(Task)
admin.site.register(Schedule)
admin.site.register(Reminder)
admin.site.register(Progress)
