
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
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Value Chain Connectivity",
      description: "Connect all stakeholders from manufacturers to recyclers, enabling seamless communication and data sharing across the entire product ecosystem."
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
      title: "Asset Management & Lifecycle Support",
      description: "Track and manage products throughout their entire lifecycle, from manufacturing to end-of-life, gaining insights for better planning and maintenance."
    },
    {
      icon: <Recycle className="h-6 w-6 text-primary" />,
      title: "Circularity & Sustainability",
      description: "Support repair, refurbishment, and recycling initiatives with comprehensive product data, meeting Extended Producer Responsibility requirements."
    },
    {
      icon: <Archive className="h-6 w-6 text-primary" />,
      title: "Digital Product Passport Ready",
      description: "Prepare for upcoming regulations with transparent reporting on composition, origin, and environmental impact of your products.",
      hasMoreInfo: true,
      moreInfoLink: "/dpp"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <HoverCard>
            {/* <HoverCardTrigger asChild>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 cursor-help">
                <FileText className="mr-2 h-4 w-4" />
                <span className="text-xs font-medium">EU Digital Product Passport Compliance</span>
              </div>
            </HoverCardTrigger> */}
            <HoverCardContent className="w-80 md:w-96 p-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">EU Digital Product Passport</h4>
                <p className="text-xs text-muted-foreground">
                  The EU Digital Product Passport is a proposed system to track, share, and manage product information across its entire lifecycle. It digitally stores data like raw materials used, manufacturing details, and repair or recycling instructions, making it easier for businesses and consumers to understand the environmental impact and reuse or recycle products efficiently.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <h2 className="mb-6">
            Connect Your Entire
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Product Ecosystem</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hoolala connects all stakeholders across the value chain, supporting the complete product lifecycle from creation to recycling while ensuring regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
