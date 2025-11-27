import * as Sentry from '@sentry/react';

/**
 * Initialize Sentry error tracking
 * Initializes with a valid DSN in all environments
 */
export function initSentry() {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  const environment = import.meta.env.MODE || 'development';

  if (!dsn) {
    return;
  }

  try {
    Sentry.init({
      dsn,
      environment,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false
        })
      ],

      // Performance Monitoring
      tracesSampleRate: environment === 'production' ? 0.1 : 1.0,

      // Session Replay
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,

      // Filter out sensitive data
      beforeSend(event: Sentry.ErrorEvent) {
        if (event.request) {
          delete event.request.cookies;
          delete event.request.headers;
        }
        return event;
      }
    });
  } catch (error) {
    console.error('[Sentry] Initialization failed:', error);
  }
}
