import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionOverview from '../components/landing/SolutionOverview';
import FeaturesSection from '../components/landing/FeaturesSection';
import PricingSection from '../components/landing/PricingSection';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

const LandingPage: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={i18n.language === 'de' ? 'PIM System für E-Commerce' : 'PIM System for E-Commerce'}
        description={
          i18n.language === 'de'
            ? 'Professionelles PIM-System speziell für kleine und mittelständische E-Commerce Unternehmen. Produkte zentral verwalten, Kanäle automatisch bespielen.'
            : 'Professional PIM system designed for small and medium-sized e-commerce businesses. Centrally manage products, automatically populate channels.'
        }
        lang={i18n.language}
        canonical="https://slimpim.ai"
      />

      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Problem Section - Agitate pain points */}
      <ProblemSection />

      {/* Solution Overview - Position SlimPIM as the answer */}
      <SolutionOverview />

      {/* Features Section - Show value through outcomes */}
      <FeaturesSection />

      {/* Pricing Section - Competitive pricing teaser */}
      <PricingSection />

      {/* Final CTA - Last chance to convert */}
      <FinalCTA />

      {/* Footer - Legal, links, trust signals */}
      <Footer />
    </div>
  );
};

export default LandingPage;
