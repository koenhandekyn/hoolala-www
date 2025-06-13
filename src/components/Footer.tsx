import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
                  {t('summary.overview.what.description')}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-xs text-muted-foreground">
                  {t('summary.footer.copyright')}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {/* <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li> */}
              {/* <li>
                <a href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li> */}
              <li>
                {/* link to main page top as name overview */}
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/summary" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  One-pager
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {/* <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li> */}
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
