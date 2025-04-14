
import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const DppIntroSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <FileText className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">What is the EU Digital Product Passport?</h2>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed">
          The EU Digital Product Passport (DPP) is a key initiative within the European Union's sustainable product 
          policy framework, designed to enhance transparency across supply chains. It aims to make product information 
          accessible throughout the entire lifecycle, from raw material extraction to disposal and recycling.
        </p>
        
        <div className="my-10 p-6 bg-muted/30 rounded-xl border border-border">
          <h3 className="text-xl font-semibold mb-4">Core Components of the Digital Product Passport</h3>
          <p className="mb-4">
            The DPP consists of a unique product identifier and a digital record containing comprehensive data about a 
            product, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Materials and components used in manufacturing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Environmental impact information</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Product carbon footprint</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Repair and maintenance instructions</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Disassembly guidelines</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>End-of-life recycling protocols</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                <span>Compliance certifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DppIntroSection;
