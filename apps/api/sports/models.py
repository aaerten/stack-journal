from django.db import models

class Match(models.Model):
    STATUS_CHOICES = [
        ('live', 'Live'),
        ('upcoming', 'Upcoming'),
        ('finished', 'Finished'),
    ]
    home_team = models.CharField(max_length=100)
    away_team = models.CharField(max_length=100)
    home_score = models.IntegerField(default=0)
    away_score = models.IntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    match_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-match_date']

    def __str__(self):
        return f"{self.home_team} vs {self.away_team}"

    @property
    def score(self):
        return f"{self.home_score}-{self.away_score}"
