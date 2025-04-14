
import React from 'react';
import { ArrowLeft, Clock, Globe, FileCode, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const PageHeader: React.FC = () => {
  return (
    <div className="mb-12">
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="flex flex-wrap items-center gap-3 mt-8 mb-6">
        <Badge variant="outline" className="bg-primary/5 text-primary">Regulatory</Badge>
        <Badge variant="outline" className="bg-secondary/5 text-secondary">Sustainability</Badge>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        EU Digital Product Passport
      </h1>
      
      <div className="flex items-center mb-10 gap-8 flex-wrap">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-muted-foreground mr-2" />
          <span className="text-sm text-muted-foreground">Implementation: 2026-2028</span>
        </div>
        <div className="flex items-center">
          <Globe className="h-5 w-5 text-muted-foreground mr-2" />
          <span className="text-sm text-muted-foreground">European Union Regulation</span>
        </div>
        <div className="flex items-center">
          <FileCode className="h-5 w-5 text-muted-foreground mr-2" />
          <span className="text-sm text-muted-foreground">Part of Circular Economy Action Plan</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="rounded-2xl overflow-hidden border border-border mb-12">
          <img 
            src="/lovable-uploads/1cf5264e-3223-446b-86b4-35fd700b25ea.png" 
            alt="Digital Product Passport visualization" 
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
        <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default PageHeader;
