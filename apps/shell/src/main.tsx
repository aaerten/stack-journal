import React from 'react';
import { createRoot } from 'react-dom/client';
import { initSentry } from '@stack-journal/monitoring';
import App from './App';

initSentry(
  import.meta.env.VITE_SENTRY_DSN,
  'apps/shell'
);

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
