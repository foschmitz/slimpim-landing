import { useState, useEffect, useCallback } from 'react';

/**
 * Cookie Consent Hook for React
 * Manages cookie consent state and storage
 */

// Types
export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing' | 'external';

export interface ConsentData {
  version: string;
  timestamp: string;
  accepted: CookieCategory[];
  rejected: CookieCategory[];
  userAgent: string | null;
}

// Constants
const COOKIE_CATEGORIES: CookieCategory[] = ['necessary', 'functional', 'analytics', 'marketing', 'external'];
const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_VERSION = '1.0';
const CONSENT_EXPIRY_DAYS = 365;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentData | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /**
   * Check if consent is valid
   */
  const isValidConsent = (consentData: ConsentData | null): boolean => {
    if (!consentData || typeof consentData !== 'object') return false;
    if (consentData.version !== CONSENT_VERSION) return false;
    if (!Array.isArray(consentData.accepted)) return false;
    return true;
  };

  /**
   * Get a cookie
   */
  const getCookie = (name: string): string | null => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  /**
   * Load consent from storage
   */
  const loadConsent = useCallback((): ConsentData | null => {
    // Try localStorage first
    try {
      const stored = localStorage.getItem(`${CONSENT_COOKIE_NAME}_data`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load from localStorage:', e);
    }

    // Fallback to cookie
    const cookieValue = getCookie(CONSENT_COOKIE_NAME);
    if (cookieValue) {
      try {
        const compact = JSON.parse(cookieValue);
        return {
          version: compact.v,
          accepted: compact.a,
          timestamp: compact.t,
          rejected: [],
          userAgent: null
        };
      } catch (e) {
        console.warn('Failed to parse cookie:', e);
      }
    }

    return null;
  }, []);

  // Load consent on mount
  useEffect(() => {
    const loadedConsent = loadConsent();

    if (loadedConsent && isValidConsent(loadedConsent)) {
      setConsent(loadedConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, [loadConsent]);

  /**
   * Save consent to storage
   */
  const saveConsent = useCallback((consentData: ConsentData) => {
    // Save to localStorage
    try {
      localStorage.setItem(`${CONSENT_COOKIE_NAME}_data`, JSON.stringify(consentData));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }

    // Save to cookie (compact)
    const compactConsent = {
      v: consentData.version,
      a: consentData.accepted,
      t: consentData.timestamp
    };
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(compactConsent), CONSENT_EXPIRY_DAYS);

    setConsent(consentData);
    setShowBanner(false);
  }, []);

  /**
   * Create consent object
   */
  const createConsent = (acceptedCategories: CookieCategory[], rejected: CookieCategory[] = []): ConsentData => {
    return {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      accepted: acceptedCategories,
      rejected: rejected,
      userAgent: navigator.userAgent
    };
  };

  /**
   * Accept all categories
   */
  const acceptAll = useCallback(() => {
    const consentData = createConsent(COOKIE_CATEGORIES);
    saveConsent(consentData);
  }, [saveConsent]);

  /**
   * Reject all optional categories
   */
  const rejectAll = useCallback(() => {
    const consentData = createConsent(
      ['necessary'],
      COOKIE_CATEGORIES.filter(c => c !== 'necessary')
    );
    saveConsent(consentData);
  }, [saveConsent]);

  /**
   * Custom selection
   */
  const saveCustom = useCallback((selectedCategories: CookieCategory[]) => {
    const accepted: CookieCategory[] = ['necessary', ...selectedCategories.filter(c => c !== 'necessary')];
    const rejected = COOKIE_CATEGORIES.filter(c => !accepted.includes(c));
    const consentData = createConsent(accepted, rejected);
    saveConsent(consentData);
  }, [saveConsent]);

  /**
   * Check if category is consented
   */
  const hasConsent = useCallback((category: CookieCategory): boolean => {
    if (!consent) return false;
    if (category === 'necessary') return true;
    return consent.accepted.includes(category);
  }, [consent]);

  /**
   * Set a cookie
   */
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${secure}`;
  };

  return {
    consent,
    showBanner,
    showModal,
    setShowModal,
    acceptAll,
    rejectAll,
    saveCustom,
    hasConsent,
    categories: COOKIE_CATEGORIES
  };
};
