import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UserStories from '@/components/UserStories';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <UserStories />
          <HowItWorks />
          <Features />
          <Testimonials />
          <UseCases />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
