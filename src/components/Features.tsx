
import React from 'react';
import { Scan, Files, Clock, ShieldCheck, Smartphone, Archive, Zap, CheckCircle2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Scan className="h-6 w-6 text-primary" />,
      title: "Digital Fingerprints",
      description: "Create unique digital twins for each product, linking physical assets to essential data and service history."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Universal Access",
      description: "Works on any modern device without requiring app downloads - just scan or tap for instant information."
    },
    {
      icon: <Files className="h-6 w-6 text-primary" />,
      title: "Complete Documentation",
      description: "Keep manuals, warranties, and service records in one place, accessible to both customers and service teams."
    },
    {
      icon: <Archive className="h-6 w-6 text-primary" />,
      title: "Future-Proof Compliance",
      description: "Prepare for Digital Product Passport regulations and embrace circularity with lifecycle tracking."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Streamlined Service",
      description: "Empower customers to submit service requests in seconds, reducing support costs and wait times."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Efficient Follow-ups",
      description: "Service teams gain immediate access to product history, reducing troubleshooting time."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your product data is protected while remaining accessible to authorized users."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Smarter Asset Management",
      description: "Gain insights into product lifecycles, improving planning, maintenance, and customer satisfaction."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">Key Benefits</span>
          </div>
          
          <h2 className="mb-6">
            Beyond Basic Tracking:
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Smart Product Lifecycle Management</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hoolala creates digital twins for every item, connecting physical assets to essential data for more intelligent service and lifecycle management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
