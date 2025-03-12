
import React from 'react';
import { QrCode, FileText, Share2, Nfc } from 'lucide-react';
import ArtworkImage from './ArtworkImage';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="relative">
      {/* Line connector (except the last item) */}
      {number < 3 && (
        <div className="absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block hidden"></div>
      )}
      
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 z-10">
          {icon}
        </div>
        
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-medium mb-4">
          {number}
        </span>
        
        <h3 className="text-xl font-medium mb-2 text-center">{title}</h3>
        <p className="text-sm text-muted-foreground text-center max-w-xs">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">How It Works</span>
          </div>
          
          <h2 className="mb-6">
            Three Simple Steps to 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Streamline Your Process</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hoolala makes tracking and documentation effortless with a streamlined workflow that anyone can follow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          <Step 
            number={1}
            icon={<div className="flex items-center gap-1"><QrCode className="h-6 w-6 text-primary" /><Nfc className="h-6 w-6 text-primary" /></div>}
            title="Tag It"
            description="Use QR codes (visible) or NFC/RFID (invisible) to label your products for easy identification."
          />
          
          <Step 
            number={2}
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Enrich It"
            description="Add photos, notes, documents, and internal metadata to create a complete service history."
          />
          
          <Step 
            number={3}
            icon={<Share2 className="h-8 w-8 text-primary" />}
            title="Share It"
            description="Customers & technicians can scan a QR code or tap an NFC tag to access info or request service."
          />
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="mb-6 w-full">
                    <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-muted/30 flex items-center justify-center p-4">
                        <QrCode className="w-3/4 h-3/4 text-primary" strokeWidth={1} />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Share2 className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-medium mb-4">QR Code Tracking</h3>
                    <p className="text-muted-foreground mb-6">
                      Scan this demo QR code to see how Hoolala works in real time. No download required - just point your camera and experience the simplicity.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all"
                    >
                      Try QR Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="mb-6 w-full">
                    <ArtworkImage 
                      src="/lovable-uploads/17db235b-2998-40fd-afe4-eb2e90b66bd9.png"
                      alt="Water heater with NFC tag"
                      className="w-full max-w-[280px] aspect-square mx-auto"
                    />
                  </div>
                  
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-medium mb-4">NFC/RFID Tracking</h3>
                    <p className="text-muted-foreground mb-6">
                      Simply tap your phone on equipment with invisible NFC/RFID tags to instantly access service history, documentation, and support options.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all"
                    >
                      Learn About NFC
                    </a>
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

export default HowItWorks;
