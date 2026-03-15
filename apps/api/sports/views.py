from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Match
from .serializers import MatchSerializer

class MatchListView(generics.ListAPIView):
    serializer_class = MatchSerializer

    def get_queryset(self):
        status = self.request.query_params.get('status')
        if status:
            return Match.objects.filter(status=status)
        return Match.objects.all()

@api_view(['GET'])
def health_check(request):
    return Response({'status': 'ok', 'service': 'stack-journal-api'})
