
import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';


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
  recommended = false
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

        <div className="p-3 rounded-lg bg-muted/100 flex items-center">
          {/* <HelpCircle className="h-4 w-4 text-muted-foreground mr-2" /> */}
          <span className="text-xs">{limit}</span>
        </div>

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

      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {

  const pricingPlans = {
    prepaid: [
      {
        title: "1-Year ",
        price: "Free Trial",
        description: "For personal projects and experiments",
        limit: "First 3 tags"
      },
      {
        title: "Starter",
        price: "€5 per tag",
        description: "For small businesses or contractors",
        limit: "4th - 100th tag",
        recommended: true
      },
      {
        title: "Scale-Up",
        price: "€1 per tag",
        description: "For mid-sized manufacturers",
        limit: "101st - 1,000th tag"
      },
      {
        title: "Enterprise",
        price: "€0.50 per tag",
        description: "For high-volume manufacturers",
        limit: "1,001th+ tag"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
