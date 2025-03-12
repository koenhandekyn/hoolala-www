
import React from 'react';
import { Briefcase, Home, Factory, Wrench, Building, LandPlot, Check } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, benefits }) => {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: "Manufacturers",
      description: "Track service history for your custom products with ease.",
      benefits: [
        "Instant access to original specs",
        "Complete installation notes",
        "Streamlined warranty claims"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Contractors",
      description: "Simplify post-installation support with smart tagging.",
      benefits: [
        "Document installations properly",
        "Reduce support call time",
        "Build customer loyalty"
      ]
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Service Teams",
      description: "Provide fast, reliable support with instant access.",
      benefits: [
        "Prepare for service calls better",
        "Reduce diagnostic time",
        "Access complete service history"
      ]
    },
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: "Homeowners",
      description: "Keep appliance manuals, warranties, and service history accessible.",
      benefits: [
        "Find documentation quickly",
        "Request service effortlessly",
        "Track maintenance history"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Rent & Lease",
      description: "Track maintenance for rental properties and equipment.",
      benefits: [
        "Simplify tenant issue reporting",
        "Document maintenance properly",
        "Extend equipment lifespan"
      ]
    },
    {
      icon: <LandPlot className="h-6 w-6 text-primary" />,
      title: "Public Asset Management",
      description: "Enable issue reporting for public assets like parks and buildings.",
      benefits: [
        "Streamline citizen reporting",
        "Track maintenance efficiently",
        "Improve response times"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">Use Cases</span>
          </div>
          
          <h2 className="mb-6">
            Perfect for Every 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Industry & Need</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hoolala adapts to diverse industries and use cases, providing tailored solutions for various tracking and service needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              benefits={useCase.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
