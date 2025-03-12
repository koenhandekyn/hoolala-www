
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ArtworkImage from './ArtworkImage';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">Effortless Service & Follow-Up</span>
          </div>
          
          <h1 className="mb-6 leading-tight">
            Track, Document & Service
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> With Absolute Ease</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tag your products with QR codes or RFID to simplify tracking, documentation, and service requests for you and your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-background border border-border hover:bg-muted/50 transition-all"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
