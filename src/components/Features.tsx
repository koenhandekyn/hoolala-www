
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
      title: "Instant Access",
      description: "Scan a QR code, get all the product details and documentation instantly."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Works on Any Modern Phone",
      description: "No app needed, just scan and go with any smartphone camera."
    },
    {
      icon: <Files className="h-6 w-6 text-primary" />,
      title: "No More Lost Info",
      description: "Keep documents & service history in one place, always accessible."
    },
    {
      icon: <Archive className="h-6 w-6 text-primary" />,
      title: "10+ Years Archiving",
      description: "Keep records available long-term for compliance and peace of mind."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Service Handling",
      description: "Customers can submit requests with one scan, simplifying the process."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Effortless Follow-ups",
      description: "QR/RFID make follow-ups seamless for you to find all info."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Secure & Reliable",
      description: "Your data is stored safely and accessible only to the right people."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Convenient",
      description: "Everything in one place, instantly accessible when needed."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">Features</span>
          </div>
          
          <h2 className="mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Effortless Tracking</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hoolala combines powerful features to revolutionize how you track, document, and service your products.
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
