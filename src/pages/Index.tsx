import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PricingPlans from '@/components/PricingPlans';
import Footer from '@/components/Footer';
import UseCases from '@/components/UseCases';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        {/* <PricingPlans /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
