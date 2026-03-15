from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    score = serializers.ReadOnlyField()

    class Meta:
        model = Match
        fields = ['id', 'home_team', 'away_team', 'score', 'home_score', 'away_score', 'status', 'match_date']
