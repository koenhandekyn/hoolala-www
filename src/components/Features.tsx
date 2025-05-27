import React from 'react';
import { Scan, Files, Clock, ShieldCheck, Smartphone, Archive, Zap, CheckCircle2, FileText, Recycle, Globe, Link, Users, RefreshCw, Info, ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Link as RouterLink } from 'react-router-dom';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasMoreInfo?: boolean;
  moreInfoLink?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, hasMoreInfo, moreInfoLink }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>

      {hasMoreInfo && moreInfoLink && (
        <div className="mt-4 pt-3 border-t border-border">
          <RouterLink to={moreInfoLink} className="text-sm text-primary font-medium inline-flex items-center hover:underline">
            More info
            <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </RouterLink>
        </div>
      )}
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Scan className="h-6 w-6 text-primary" />,
      title: "Smart Product Identity",
      description: "Transform products into smart assets with instant access - just scan and go, no app needed."
    },
    {
      icon: <Files className="h-6 w-6 text-primary" />,
      title: "Complete Product History",
      description: "Track and access complete product history - from manuals to service records."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Streamlined Service & Sustainability",
      description: "Enable efficient service and sustainable practices with complete product data."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <HoverCard>
            <HoverCardContent className="w-80 md:w-96 p-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">EU Digital Product Passport</h4>
                <p className="text-xs text-muted-foreground">
                  The EU Digital Product Passport is a proposed system to track, share, and manage product information across its entire lifecycle. It digitally stores data like raw materials used, manufacturing details, and repair or recycling instructions, making it easier for businesses and consumers to understand the environmental impact and reuse or recycle products efficiently.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              hasMoreInfo={feature.hasMoreInfo}
              moreInfoLink={feature.moreInfoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
