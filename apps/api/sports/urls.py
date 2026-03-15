from django.urls import path
from . import views

urlpatterns = [
    path('matches/', views.MatchListView.as_view(), name='match-list'),
]
