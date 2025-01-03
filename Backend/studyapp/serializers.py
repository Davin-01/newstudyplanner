from rest_framework import serializers
from .models import User, Subject, Task, Schedule, Reminder, Progress

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "profile_picture"]

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = "__all__"

class ReminderSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Reminder
        fields = "__all__"

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = "__all__"
