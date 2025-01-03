from rest_framework import serializers
from .models import User, Subject, Task, Schedule, Reminder, Progress

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile_picture']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'user', 'name', 'description', 'created_at']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'user', 'subject', 'title', 'description', 'due_date', 'is_completed', 'created_at']

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'user', 'date', 'start_time', 'end_time', 'task']

class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ['id', 'user', 'task', 'reminder_time']

class ProgressSerializer(serializers.ModelSerializer):
    completion_percentage = serializers.ReadOnlyField()

    class Meta:
        model = Progress
        fields = ['id', 'user', 'subject', 'completed_tasks', 'total_tasks', 'completion_percentage']
