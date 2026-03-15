import React, { useEffect, useState } from 'react';
import { Badge } from '@stack-journal/ui';

interface Match {
  id: number;
  home_team: string;
  away_team: string;
  score: string;
  status: 'live' | 'upcoming' | 'finished';
  match_date: string;
}

const statusVariant: Record<string, 'danger' | 'warning' | 'success'> = {
  live: 'danger',
  upcoming: 'warning',
  finished: 'success',
};

const API_URL = process.env.API_URL || 'http://localhost:8000';

export default function SportsDashboard() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/sports/matches/`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch matches');
        return res.json();
      })
      .then(data => {
        setMatches(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', color: '#888' }}>
      Loading matches...
    </div>
  );

  if (error) return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', color: '#ef4444' }}>
      Error: {error}
    </div>
  );

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: '8px', fontSize: '18px' }}>Sports Dashboard</h2>
      <p style={{ marginBottom: '16px', fontSize: '12px', color: '#888' }}>
        🚀 Live data from Django REST API (port 8000)
      </p>
      {matches.map((m) => (
        <div key={m.id} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px', marginBottom: '8px',
          border: '1px solid #e5e7eb', borderRadius: '8px',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>{m.home_team}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700 }}>{m.score}</span>
            <Badge label={m.status} variant={statusVariant[m.status]} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>{m.away_team}</span>
        </div>
      ))}
    </div>
  );
}
