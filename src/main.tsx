import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { initSentry } from './utils/sentry';
import './index.css';
import './i18n/config';
import App from './App.tsx';

// Initialize Sentry error tracking
initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
