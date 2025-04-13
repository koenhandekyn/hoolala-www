
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
              Industry 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Use Cases</span>
            </h1>
            <p className="text-muted-foreground">
              Discover how Hoolala adapts to diverse industries, providing tailored solutions for various tracking and service needs.
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
