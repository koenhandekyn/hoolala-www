
import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeaturesProps {
  features: string[];
}

const PricingFeatures: React.FC<PricingFeaturesProps> = ({ features }) => {
  return (
    <ul className="space-y-3 mt-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  limit: string;
  recommended?: boolean;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  limit, 
  recommended = false,
  features 
}) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-px",
        recommended 
          ? "bg-gradient-to-b from-primary/50 to-primary/10" 
          : "bg-border/50"
      )}
    >
      <div className={cn(
        "h-full rounded-2xl p-6 lg:p-8 bg-white/90",
        recommended && "bg-primary/[0.02]"
      )}>
        {recommended && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-medium">Recommended</span>
          </div>
        )}
        
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-muted-foreground ml-1">{price !== "$0" ? "¢ per tag/month" : " per tag"}</span>
        </div>
        
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-4 p-3 rounded-lg bg-muted/30 flex items-center">
          <HelpCircle className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="text-xs">{limit}</span>
        </div>
        
        <PricingFeatures features={features} />
        
        <div className="mt-8">
          <a
            href="#"
            className={cn(
              "w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors",
              recommended 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-primary/10 text-primary hover:bg-primary/20"
            )}
          >
            Choose Plan
          </a>
        </div>
      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const pricingPlans = {
    monthly: [
      {
        title: "Free",
        price: "$0",
        description: "For personal projects and experiments",
        limit: "Up to 10 active tags",
        features: [
          "Basic QR code generation",
          "Simple product information",
          "Standard support",
          "7-day history"
        ]
      },
      {
        title: "Starter",
        price: "10",
        description: "For small businesses or contractors",
        limit: "Up to 1000 active tags",
        recommended: true,
        features: [
          "Custom QR code designs",
          "Detailed product information",
          "Photo & document storage",
          "Service request handling",
          "30-day history",
          "Priority support"
        ]
      },
      {
        title: "Scale-Up",
        price: "3",
        description: "For mid-sized manufacturers",
        limit: "Up to 10,000 active tags",
        features: [
          "Everything in Starter",
          "Advanced analytics",
          "Team collaboration",
          "API access",
          "Custom integrations",
          "1-year history",
          "Premium support"
        ]
      },
      {
        title: "Enterprise",
        price: "1",
        description: "For high-volume manufacturers",
        limit: "10,000+ active tags",
        features: [
          "Everything in Scale-Up",
          "Dedicated account manager",
          "Custom development",
          "Full white-labeling",
          "RFID tag support",
          "Unlimited history",
          "24/7 support"
        ]
      }
    ],
    prepaid: [
      {
        title: "Free",
        price: "$0",
        description: "For personal projects and experiments",
        limit: "Up to 10 active tags",
        features: [
          "Basic QR code generation",
          "Simple product information",
          "Standard support",
          "7-day history"
        ]
      },
      {
        title: "Starter",
        price: "$4",
        description: "For small businesses or contractors",
        limit: "10 - 1000 tags",
        recommended: true,
        features: [
          "Custom QR code designs",
          "Detailed product information",
          "Photo & document storage",
          "Service request handling",
          "30-day history",
          "Priority support"
        ]
      },
      {
        title: "Scale-Up",
        price: "$1",
        description: "For mid-sized manufacturers",
        limit: "1000 - 10,000 tags",
        features: [
          "Everything in Starter",
          "Advanced analytics",
          "Team collaboration",
          "API access",
          "Custom integrations",
          "1-year history",
          "Premium support"
        ]
      },
      {
        title: "Enterprise",
        price: "$0.25",
        description: "For high-volume manufacturers",
        limit: "10,000+ tags",
        features: [
          "Everything in Scale-Up",
          "Dedicated account manager",
          "Custom development",
          "Full white-labeling",
          "RFID tag support",
          "Unlimited history",
          "24/7 support"
        ]
      }
    ]
  };
  
  const activePlans = isMonthly ? pricingPlans.monthly : pricingPlans.prepaid;

  return (
    <section id="pricing" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">Pricing</span>
          </div>
          
          <h2 className="mb-6">
            Simple, Transparent 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Pricing</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the pricing plan that fits your business needs, with flexible options for businesses of all sizes.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setIsMonthly(true)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                isMonthly 
                  ? "bg-primary text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              )}
            >
              Monthly
            </button>
            
            <button
              onClick={() => setIsMonthly(false)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                !isMonthly 
                  ? "bg-primary text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              )}
            >
              Prepaid
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activePlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              limit={plan.limit}
              recommended={plan.recommended}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
