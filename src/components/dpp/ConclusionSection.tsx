
import React from 'react';
import { Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConclusionSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <Info className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">Conclusion: The Future of Product Information</h2>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed">
          The EU Digital Product Passport represents a paradigm shift in how product information is managed and 
          shared. By centralizing comprehensive product data and making it accessible to all stakeholders, 
          the DPP aims to accelerate the transition to a circular economy, reduce waste, and empower consumers 
          to make more sustainable choices.
        </p>
        
        <p className="text-lg leading-relaxed mt-4">
          As implementation progresses across different sectors, businesses that embrace the DPP concept early 
          will not only ensure regulatory compliance but may also gain competitive advantages through enhanced 
          transparency, improved product stewardship, and stronger customer relationships built on trust and 
          shared sustainability values.
        </p>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
        >
          Return to Homepage
          <ArrowLeft className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ConclusionSection;
