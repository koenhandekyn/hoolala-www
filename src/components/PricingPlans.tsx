
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
  isMonthly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  limit,
  recommended = false,
  features,
  isMonthly
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

        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}&nbsp;</span>
        </div>

        <h3 className="text-xl font-medium">{title}</h3>

        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 p-3 rounded-lg bg-muted/30 flex items-center">
          <HelpCircle className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="text-xs">{limit}</span>
        </div>

        <PricingFeatures features={features} />

      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {

  const pricingPlans = {
    prepaid: [
      {
        title: "Free",
        price: "",
        description: "For personal projects and experiments",
        limit: "First 10 tags",
        features: [
          "Basic QR code generation",
          "Simple product information",
          "Photo & document storage",
        ]
      },
      {
        title: "Starter",
        price: "€2.5/tag",
        description: "For small businesses or contractors",
        limit: "First 10 - 100 tags",
        recommended: true,
        features: [
          "Custom QR code designs",
          "Detailed product information",
          "Service request handling",
        ]
      },
      {
        title: "Scale-Up",
        price: "€1/tag",
        description: "For mid-sized manufacturers",
        limit: "Next 100 - 1,000 tags",
        features: [
          "Everything in Starter",
          "Activates API access",
        ]
      },
      {
        title: "Enterprise",
        price: "€0.25/tag",
        description: "For high-volume manufacturers",
        limit: "1,000+ tags",
        features: [
          "Everything in Scale-Up",
          "Activates full white-labeling",
        ]
      }
    ]
  };

  const activePlans = pricingPlans.prepaid;

  return (
    <section id="pricing" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Pricing</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            A pricing plan that fits your business needs, adjusting to all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activePlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              limit={plan.limit}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
