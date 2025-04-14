
import React from 'react';
import { Clock } from 'lucide-react';
import TimelineItem from './TimelineItem';

const TimelineSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <Clock className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">Implementation Timeline and Scope</h2>
      </div>
      
      <p className="text-lg mb-8">
        The EU's Digital Product Passport initiative is being rolled out progressively, starting with 
        priority product categories:
      </p>
      
      <div className="border-l-2 border-border pl-8 ml-4 relative">
        <TimelineItem 
          date="2026" 
          title="Batteries" 
          icon={<Clock className="h-5 w-5 text-white" />}
          color="bg-primary"
        />
        <TimelineItem 
          date="2027" 
          title="Textiles and Electronics/ICT Equipment" 
          icon={<Clock className="h-5 w-5 text-white" />}
          color="bg-primary/80"
        />
        <TimelineItem 
          date="2028" 
          title="Furniture and Construction Products" 
          icon={<Clock className="h-5 w-5 text-white" />}
          color="bg-primary/60"
        />
        <TimelineItem 
          date="Beyond 2028" 
          title="Additional Product Categories" 
          icon={<Clock className="h-5 w-5 text-white" />}
          color="bg-primary/40"
        />
      </div>
    </div>
  );
};

export default TimelineSection;
