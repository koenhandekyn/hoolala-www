
import React from 'react';
import { ChevronRight, QrCode, Tag, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-12">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:shadow-xl"
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
        
        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          
          {/* Main device mockup */}
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in p-1">
            <div className="aspect-[390/844] w-full max-w-[390px] mx-auto overflow-hidden rounded-[32px] shadow-inner">
              <div className="w-full h-full bg-gradient-to-b from-background to-muted p-4 overflow-hidden">
                {/* Phone interface mockup */}
                <div className="w-full h-full flex flex-col rounded-3xl overflow-hidden">
                  {/* Status bar */}
                  <div className="h-6 flex items-center justify-between px-4 text-[10px] font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-foreground/80 rounded-sm"></div>
                      <div className="w-4 h-2 bg-foreground/60 rounded-sm"></div>
                      <div className="w-4 h-2 bg-foreground/40 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 mt-2 flex flex-col">
                    {/* App header */}
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-lg font-bold text-primary">Hoolala</span>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-medium">JD</span>
                      </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-4 space-y-4">
                      <div className="glass p-4 rounded-2xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <QrCode className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Tag Products</h4>
                            <p className="text-xs text-muted-foreground">Scan QR code or RFID</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass p-4 rounded-2xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <Tag className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Enrich Information</h4>
                            <p className="text-xs text-muted-foreground">Add photos, notes, documents</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass p-4 rounded-2xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Service History</h4>
                            <p className="text-xs text-muted-foreground">Track all maintenance and repairs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
