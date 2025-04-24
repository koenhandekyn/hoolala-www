
import React from 'react';
import { ChevronRight, FileText, ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 cursor-help">
                  <FileText className="mr-2 h-4 w-4" />
                  <span className="text-xs font-medium">EU Digital Product Passport Ready</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 md:w-96 p-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">EU Digital Product Passport</h4>
                  <p className="text-xs text-muted-foreground">
                    The EU Digital Product Passport is a digital system that stores and shares product information across the value chain, making data accessible to consumers and businesses to promote sustainability and circular economy practices.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <h1 className="mb-6 leading-tight">
              Connect Your Products,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Simplify Your Service</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Effortless tracking for smarter asset management. Create digital twins of your products for simplified service, documentation, and lifecycle tracking.
              Prepare for EU Digital Product Passport regulations with comprehensive, transparent product data management.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://app.wazzat.app"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
              >
                Start Simplifying Today
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

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:translate-x-4 hover:translate-y-[-5px] transition-all duration-500">
              <img
                src="/lovable-uploads/c0ab0a08-2c02-468d-978d-ce9776521950.png"
                alt="Technician scanning QR code for service information"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/10"></div>
            </div>
            <div className="absolute -z-10 top-1/3 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 -left-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
