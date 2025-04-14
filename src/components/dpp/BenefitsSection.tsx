
import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, Recycle } from 'lucide-react';
import BenefitCard from './BenefitCard';

const BenefitsSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <Recycle className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">Who Benefits from Digital Product Passports?</h2>
      </div>
      
      <p className="text-lg mb-8">
        The implementation of Digital Product Passports offers advantages to various stakeholders across the 
        value chain:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <BenefitCard 
          icon={<FileText className="h-6 w-6 text-primary" />}
          title="For Manufacturers"
          items={[
            "Streamlined regulatory compliance",
            "Enhanced brand reputation through transparency",
            "Better inventory and supply chain management",
            "Improved product quality through data analysis"
          ]}
        />
        
        <BenefitCard 
          icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
          title="For Consumers"
          items={[
            "Access to verified product information",
            "Ability to make more sustainable purchasing decisions",
            "Better understanding of product maintenance",
            "Clear end-of-life disposal instructions"
          ]}
        />
        
        <BenefitCard 
          icon={<AlertTriangle className="h-6 w-6 text-primary" />}
          title="For Regulators"
          items={[
            "Enhanced market surveillance capabilities",
            "Easier verification of regulatory compliance",
            "Better monitoring of waste streams",
            "Data-driven policy development"
          ]}
        />
        
        <BenefitCard 
          icon={<Recycle className="h-6 w-6 text-primary" />}
          title="For Recyclers"
          items={[
            "Detailed information about product composition",
            "Optimized recycling processes",
            "Reduced contamination in recycling streams",
            "Increased recovery rates of valuable materials"
          ]}
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
