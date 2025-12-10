import React from 'react';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  icon: string;
  feature: string;
  benefit: string;
  outcome: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, feature, benefit, outcome }) => (
  <div className="card p-8 h-full hover:scale-105 transition-transform duration-300">
    <div className="text-5xl mb-6">{icon}</div>
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900">{feature}</h3>
      <p className="text-gray-600 leading-relaxed">{benefit}</p>
      <div className="bg-primary/10 text-primary font-semibold px-4 py-3 rounded-lg text-center">
        {outcome}
      </div>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation('features');
  const features = t('items', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
    outcome: string;
  }>;

  return (
    <section id="features" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold mb-4">
            {t('sectionBadge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              feature={feature.title}
              benefit={feature.description}
              outcome={feature.outcome}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <a
              href="https://app.slimpim.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 inline-block"
            >
              {t('cta.button')}
            </a>
            <div className="mt-4 text-sm text-gray-500">
              {t('cta.subtext')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
