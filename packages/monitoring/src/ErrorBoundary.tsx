import React from 'react';
import * as Sentry from '@sentry/react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={fallback ? <>{fallback}</> : (
        <div style={{ padding: '24px', fontFamily: 'monospace' }}>
          <h2 style={{ color: '#dc2626', marginBottom: '8px' }}>Something went wrong</h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            This error has been reported automatically.
          </p>
        </div>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};
