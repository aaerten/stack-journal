import * as Sentry from '@sentry/react';

interface CaptureOptions {
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
  user?: { id: string; email?: string };
}

export function useMonitoring() {
  const captureError = (error: Error, options?: CaptureOptions) => {
    Sentry.captureException(error, {
      tags: options?.tags,
      extra: options?.extra,
      user: options?.user,
    });
  };

  const captureMessage = (message: string, options?: CaptureOptions) => {
    Sentry.captureMessage(message, {
      tags: options?.tags,
      extra: options?.extra,
    });
  };

  return { captureError, captureMessage };
}
