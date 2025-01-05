from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SubjectViewSet, TaskViewSet, ScheduleViewSet, ReminderViewSet, ProgressViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'subjects', SubjectViewSet, basename='subject')
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'schedules', ScheduleViewSet, basename='schedule')
router.register(r'reminders', ReminderViewSet, basename='reminder')
router.register(r'progress', ProgressViewSet, basename='progress')


urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]
