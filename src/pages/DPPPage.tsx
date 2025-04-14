
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all the new components
import PageHeader from '@/components/dpp/PageHeader';
import DppIntroSection from '@/components/dpp/DppIntroSection';
import BenefitsSection from '@/components/dpp/BenefitsSection';
import TimelineSection from '@/components/dpp/TimelineSection';
import ChallengesSection from '@/components/dpp/ChallengesSection';
import PreparationSection from '@/components/dpp/PreparationSection';
import FaqSection from '@/components/dpp/FaqSection';
import ConclusionSection from '@/components/dpp/ConclusionSection';

const DPPPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PageHeader />
            <DppIntroSection />
            <BenefitsSection />
            <TimelineSection />
            <ChallengesSection />
            <PreparationSection />
            <FaqSection />
            <ConclusionSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DPPPage;
