import React, { Suspense } from 'react';

const SportsDashboard = React.lazy(() => import('sports/SportsDashboard'));

export default function App() {
  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '8px', fontSize: '22px' }}>mfe-shell</h1>
      <p style={{ marginBottom: '32px', fontSize: '13px', color: '#888' }}>
        Host app — loading remote modules via Module Federation
      </p>
      <Suspense fallback={<div>Loading sports-dashboard...</div>}>
        <SportsDashboard />
      </Suspense>
    </div>
  );
}
