from django.core.management.base import BaseCommand
from django.utils import timezone
from sports.models import Match

class Command(BaseCommand):
    help = 'Seed database with initial match data'

    def handle(self, *args, **options):
        if Match.objects.exists():
            self.stdout.write('Data already exists, skipping.')
            return

        Match.objects.create(home_team='Galatasaray', away_team='Fenerbahce', home_score=2, away_score=1, status='live', match_date=timezone.now())
        Match.objects.create(home_team='Besiktas', away_team='Trabzonspor', home_score=0, away_score=0, status='upcoming', match_date=timezone.now())
        Match.objects.create(home_team='Basaksehir', away_team='Sivasspor', home_score=3, away_score=2, status='finished', match_date=timezone.now())
        self.stdout.write('Seed data created successfully.')
