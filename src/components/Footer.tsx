
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex flex-col h-full">
              <div>
                <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
                  Hoolala
                </a>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                  Tag your products and installations with QR codes or RFID to simplify tracking, documentation, and service requests.
                </p>
              </div>
              
              <div className="mt-auto pt-8">
                <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} Hoolala. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex items-center space-x-2 mb-4">
              <a
                href="mailto:info@hoolala.app"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@hoolala.app</span>
              </a>
            </div>
            
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
