import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Use relative URL - Firebase hosting routes to Cloud Function
      const response = await fetch('/api/v1/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listType: 'newsletter',
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to subscribe');
      }

      setIsSuccess(true);
      setEmail('');
      setConsent(false);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerSections = {
    product: {
      title: t('footer.product.title'),
      links: [
        { label: t('footer.product.features'), href: '#features', isRoute: false },
        { label: t('footer.product.pricing'), href: '#pricing', isRoute: false }
      ]
    },
    company: {
      title: t('footer.company.title'),
      links: [
        { label: t('footer.company.about'), href: '/ueber-uns', isRoute: true },
        { label: t('footer.company.contact'), href: '/kontakt', isRoute: true }
      ]
    },
    resources: {
      title: t('footer.resources.title', 'Resources'),
      links: [
        { label: t('footer.product.api'), href: 'https://slimpim.ai/api-docs', isRoute: false }
      ]
    },
    legal: {
      title: t('footer.legal.title'),
      links: [
        { label: t('footer.legal.imprint'), href: '/impressum', isRoute: true },
        { label: t('footer.legal.privacy'), href: '/datenschutz', isRoute: true },
        { label: t('footer.legal.terms'), href: '/agb', isRoute: true },
        { label: t('footer.legal.dpa', 'DPA'), href: '/avv', isRoute: true },
        { label: t('footer.legal.cookies', 'Cookie Policy'), href: '/cookies', isRoute: true }
      ]
    }
  };

  return (
    <footer className="bg-primary text-gray-300">
      {/* Main Footer Content */}
      <div className="section max-w-7xl mx-auto py-16">
        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {link.isRoute ? (
                      <Link to={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-xl mb-4">
              {t('footer.newsletter.title')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('footer.newsletter.description')}
            </p>
            {isSuccess ? (
              <div className="max-w-md mx-auto bg-green-900/20 border border-green-700 text-green-400 px-6 py-4 rounded-lg text-center">
                <span className="text-2xl mb-2 block">✅</span>
                {t('footer.newsletter.successMessage', 'Successfully subscribed! Check your email for confirmation.')}
              </div>
            ) : (
              <form className="max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                <div className="flex gap-4 mb-4">
                  <input
                    type="email"
                    placeholder={t('footer.newsletter.emailPlaceholder')}
                    className="flex-1 px-4 py-3 rounded-lg bg-primary-hover text-white border border-gray-700 focus:border-accent focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting || !consent}
                  >
                    {isSubmitting
                      ? t('footer.newsletter.subscribing', 'Subscribing...')
                      : t('footer.newsletter.subscribe')}
                  </button>
                </div>
                {error && (
                  <div className="bg-red-900/20 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm mb-4">
                    {error}
                  </div>
                )}
                <div className="flex items-start gap-2 text-left text-sm text-gray-400">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 rounded border-gray-700 bg-primary-hover text-accent focus:ring-accent"
                  />
                  <label htmlFor="newsletter-consent" className="cursor-pointer">
                    {t('footer.newsletter.consentText')}{' '}
                    <Link to="/datenschutz" className="text-accent hover:underline">
                      {t('footer.newsletter.privacyLink')}
                    </Link>
                    .
                  </label>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-primary-hover pt-12 mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 bg-primary-hover px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">{t('footer.trustBadges.gdpr')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-hover px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">{t('footer.trustBadges.ssl')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-hover px-6 py-3 rounded-lg">
              <span className="font-semibold text-white">{t('footer.trustBadges.germany')}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-hover px-6 py-3 rounded-lg">
              <span className="font-semibold text-white">{t('footer.trustBadges.eu')}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          {t('footer.copyright')}
          {/* Version indicator for deployment verification */}
          <div className="mt-2 text-xs text-gray-600 opacity-50 hover:opacity-100 transition-opacity">
            v{import.meta.env.VITE_APP_VERSION || 'dev'}
            {import.meta.env.VITE_GIT_COMMIT_HASH && ` • ${import.meta.env.VITE_GIT_COMMIT_HASH.substring(0, 7)}`}
            {import.meta.env.VITE_BUILD_TIME && ` • ${new Date(import.meta.env.VITE_BUILD_TIME).toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}`}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
