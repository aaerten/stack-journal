from django.contrib import admin
from django.urls import path, include
from sports.views import health_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/sports/', include('sports.urls')),
    path('api/health/', health_check),
]
