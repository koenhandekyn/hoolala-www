import React from 'react';
import { Check } from 'lucide-react';
import ArtworkImage from './ArtworkImage';

interface UseCaseProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, benefits }) => {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
      {/* <div className="w-16 h-16 mb-4 mx-auto">
        <ArtworkImage
          src={icon}
          alt={title}
          iconMode={true}
          className="w-full h-full"
        />
      </div> */}
      <h3 className="text-lg font-medium mb-2 text-center">{title}</h3>
      <p className="text-base font-medium text-muted-foreground mb-4 text-center bg-muted/50 py-2 px-3 rounded-lg">{description}</p>

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
      icon: "/lovable-uploads/054c0ab9-924f-4a90-b5b4-41250e17ad26.png", // Factory icon
      title: "Manufacturers",
      description: "Digital passports for your products",
      benefits: [
        "Easily share documentation with customers",
        "Instant access to original specs",
        "Full service history",
        "Take control of service delivery",
        "Streamlined warranty claims"
      ]
    },
    {
      icon: "/lovable-uploads/9ba2c5c3-0920-410e-abaa-16e8d0f204eb.png", // Buildings/Bench icon
      title: "Contractors",
      description: "Build loyalty",
      benefits: [
        "Document projects properly with photos",
        "Track service history for each project",
        "Make support calls more efficient with instant access to the right information",
        "Improve customer satisfaction & build customer loyalty"
      ]
    },
    {
      icon: "/lovable-uploads/9e5500f1-50bc-4b10-b37b-3d2709a57ea0.png", // Tools/service icon
      title: "Service Teams",
      description: "Improve customer satisfaction",
      benefits: [
        "Prepare for service calls better and reduce diagnostic time with instant access to manuals and specs",
        "Enhance team collaboration with shared data with access to the complete service history",
        "Improve customer satisfaction & build customer loyalty",
        "Enable proactive maintenance scheduling"
      ]
    }
    // {
    //   icon: "/lovable-uploads/9e5500f1-50bc-4b10-b37b-3d2709a57ea0.png", // New homeowner icon
    //   title: "Homeowners",
    //   description: "Keep appliance manuals, warranties, and service history accessible.",
    //   benefits: [
    //     "Find documentation quickly",
    //     "Request service effortlessly",
    //     "Track maintenance history"
    //   ]
    // },
    // {
    //   icon: "/lovable-uploads/07fca938-7aed-4923-b293-6606867840ce.png", // Washing machine icon
    //   title: "Rent & Lease",
    //   description: "Track maintenance for rental properties and equipment.",
    //   benefits: [
    //     "Simplify tenant issue reporting",
    //     "Document maintenance properly",
    //     "Extend equipment lifespan"
    //   ]
    // },
    // {
    //   icon: "/lovable-uploads/1dc7fcb1-0524-4a33-9c30-0eb497688ea0.png", // Coffee cup/public space icon
    //   title: "Public Asset Management",
    //   description: "Enable issue reporting for public assets like parks and buildings.",
    //   benefits: [
    //     "Streamline citizen reporting",
    //     "Track maintenance efficiently",
    //     "Improve response times"
    //   ]
    // }
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">

          <h2 className="mb-6">
            Perfect for Every
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Industry & Need</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            <i>Wazzat?</i> adapts to diverse industries and use cases, providing tailored solutions for various tracking and service needs.
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
