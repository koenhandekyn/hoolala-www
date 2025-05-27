import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';


interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  limit: string;
  history: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  limit,
  history
}) => {
  return (
    <div className="rounded-2xl p-px bg-border/50">
      <div className="h-full rounded-2xl p-6 lg:p-8 bg-white/90">
        <div className="p-3 rounded-lg bg-muted/100 flex items-center justify-center">
          <span className="text-sm">{limit}</span>
        </div>

        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}&nbsp;</span>
        </div>

        <h3 className="text-xl font-medium">{title}</h3>

        <p className="mt-2 text-sm text-muted-foreground">History: {history}</p>
        {/* <p className="mt-2 text-sm text-muted-foreground">{description}</p> */}
      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {

  const pricingPlans = {
    prepaid: [
      {
        title: "Hobby",
        price: "Free Trial",
        description: "For personal projects and experiments",
        limit: "First 3 points",
        history: "1 year"
      },
      {
        title: "Starter",
        price: "€5 per point",
        description: "For small businesses or contractors",
        limit: "4th - 100th point",
        history: "10 years"
      },
      {
        title: "Scale-Up",
        price: "€1 per point",
        description: "For mid-sized manufacturers",
        limit: "101st - 1,000th point",
        history: "10 years"
      },
      {
        title: "Enterprise",
        price: "€0.50 per point",
        description: "For high-volume manufacturers",
        limit: "1,001th+ point",
        history: "10 years"
      }
    ]
  };

  const activePlans = pricingPlans.prepaid;

  return (
    <section id="pricing" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            One-Time Pricing,
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> No Subscriptions</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pay once, own forever. The more points you add, the less you pay per point. Physical tags sold separately and can be custom branded.
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
              history={plan.history}
            />
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto italic text-sm">
            Physical custom branded tags sold separately. <br></br>
            Contact us for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
