import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProblemCardProps {
  emoji: string;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ emoji, title, description }) => (
  <div className="card text-center p-8 hover:shadow-xl transition-all duration-300">
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProblemSection: React.FC = () => {
  const { t } = useTranslation('problems');
  const problems = t('items', { returnObjects: true }) as Array<{
    emoji: string;
    title: string;
    description: string;
  }>;
  const callout = t('callout', { returnObjects: true }) as {
    emoji: string;
    title: string;
    description: string;
  };

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        {/* Call-out Box */}
        <div className="mt-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="text-3xl">{callout.emoji}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {callout.title}
              </h3>
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: callout.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
