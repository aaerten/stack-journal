import React from 'react';
import { Badge } from '@stack-journal/ui';

const matches = [
  { id: 1, home: 'Galatasaray', away: 'Fenerbahçe', score: '2-1', status: 'live' },
  { id: 2, home: 'Beşiktaş', away: 'Trabzonspor', score: '0-0', status: 'upcoming' },
  { id: 3, home: 'Başakşehir', away: 'Sivasspor', score: '3-2', status: 'finished' },
];

const statusVariant: Record<string, 'danger' | 'warning' | 'success'> = {
  live: 'danger',
  upcoming: 'warning',
  finished: 'success',
};

export default function SportsDashboard() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Sports Dashboard</h2>
      <p style={{ marginBottom: '16px', fontSize: '12px', color: '#888' }}>
        🚀 Loaded via Module Federation from sports-dashboard (port 3001)
      </p>
      {matches.map((m) => (
        <div key={m.id} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px', marginBottom: '8px',
          border: '1px solid #e5e7eb', borderRadius: '8px',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>{m.home}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700 }}>{m.score}</span>
            <Badge label={m.status} variant={statusVariant[m.status]} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600 }}>{m.away}</span>
        </div>
      ))}
    </div>
  );
}
