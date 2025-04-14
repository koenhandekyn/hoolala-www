
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PreparationSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <CheckCircle2 className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">How to Prepare for DPP Implementation</h2>
      </div>
      
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 mb-8">
        <h3 className="text-xl font-medium mb-5">Strategic Preparation Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">1</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Audit Current Systems</h4>
              <p className="text-sm text-muted-foreground">Evaluate your product information management systems and identify gaps</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">2</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Map Supply Chains</h4>
              <p className="text-sm text-muted-foreground">Create detailed mapping of your product lifecycles and supplier networks</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">3</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Identify Data Gaps</h4>
              <p className="text-sm text-muted-foreground">Determine what product information is missing and needs to be collected</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">4</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Engage Suppliers</h4>
              <p className="text-sm text-muted-foreground">Start early collaboration with suppliers on data collection requirements</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">5</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Invest in Infrastructure</h4>
              <p className="text-sm text-muted-foreground">Develop or acquire digital systems capable of managing DPP data effectively</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-xs font-semibold text-primary">6</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Monitor Regulations</h4>
              <p className="text-sm text-muted-foreground">Stay informed about regulatory developments and implementation timelines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationSection;
