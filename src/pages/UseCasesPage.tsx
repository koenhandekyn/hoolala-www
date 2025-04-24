
import React from 'react';
import Header from '@/components/Header';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';

const UseCasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Empower Your
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Industry Solutions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how Wazzat adapts to diverse industries, providing customers and service teams with instant access to crucial information, reducing support costs, and boosting satisfaction across various sectors.
            </p>
          </div>
        </div>
        <UseCases />
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
