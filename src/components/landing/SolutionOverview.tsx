import React from 'react';
import { useTranslation } from 'react-i18next';

interface SolutionPointProps {
  title: string;
  description: string;
}

const SolutionPoint: React.FC<SolutionPointProps> = ({ title, description }) => (
  <div className="flex items-start gap-4 p-4">
    <div className="flex-shrink-0">
      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SolutionOverview: React.FC = () => {
  const { t } = useTranslation('solutions');
  const solutions = t('items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const dashboard = t('dashboard', { returnObjects: true }) as {
    title: string;
    stats: { articles: string; categories: string; users: string };
    recentSearches: string;
    badge: string;
  };

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Product Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Screenshot Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="text-lg font-bold text-gray-900">{dashboard.title}</div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: dashboard.stats.articles, value: '1,247' },
                      { label: dashboard.stats.categories, value: '24' },
                      { label: dashboard.stats.users, value: '12' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-primary-light rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Search Results */}
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="text-sm text-gray-500">{dashboard.recentSearches}</div>
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3 items-center bg-gray-50 rounded-lg p-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3">
                <div className="text-sm font-bold">{dashboard.badge}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Solution Points */}
          <div className="order-1 lg:order-2 space-y-6">
            {solutions.map((solution, index) => (
              <SolutionPoint key={index} {...solution} />
            ))}

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://app.slimpim.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto text-lg inline-block text-center"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
