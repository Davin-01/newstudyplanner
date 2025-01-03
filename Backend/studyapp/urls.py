from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SubjectViewSet, TaskViewSet, ScheduleViewSet, ReminderViewSet, ProgressViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename="users")
router.register(r'subjects', SubjectViewSet, basename="subjects")
router.register(r'tasks', TaskViewSet, basename="tasks")
router.register(r'schedules', ScheduleViewSet, basename="schedules")
router.register(r'reminders', ReminderViewSet, basename="reminders")
router.register(r'progress', ProgressViewSet, basename="progress")

urlpatterns = [
    path('', include(router.urls)),
]
