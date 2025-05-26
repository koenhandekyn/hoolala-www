
import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div className="flex flex-col h-full">
              <div>
                <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
                  <i>Wazzat?</i>
                </a>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                  Tag your products, installations, rooms, appliances, and more with QR codes or NFC tags to simplify tracking, documentation, and service requests.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} Wazzat. All rights reserved.
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
                <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Use Cases
                </Link>
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
              <li>
                <Link to="/summary" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  Summary
                </Link>
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
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wazzat.app"
                  className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@wazzat.app</span>
                </a>
              </li>
            </ul>
          </div>

          {/*
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex items-center space-x-2 mb-4">
              <a
                href="mailto:info@wazzat.app"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@wazzat.app</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
