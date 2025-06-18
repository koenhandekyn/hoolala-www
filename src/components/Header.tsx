import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/use-translation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        setIsMenuOpen(false);
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-xl font-bold tracking-tighter text-primary">
            <i>Wazzat?</i>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.features')}
            </a>
            <a href="/#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.howItWorks')}
            </a>
            <a href="/#use-cases" onClick={(e) => scrollToSection(e, 'use-cases')} className="text-sm font-medium hover:text-primary transition-colors">
              {t('header.useCases')}
            </a>
            {/* <a href="/#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a> */}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            <a
              href={`https://app.wazzat.app?locale=${language}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              {t('header.login')}
            </a>
          </div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="flex md:hidden focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 pt-16 w-full">
                <div className="flex flex-col h-full bg-white p-6">
                  <nav className="flex flex-col space-y-6">
                    <a
                      href="#features"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => {
                        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('header.features')}
                    </a>
                    <a
                      href="#how-it-works"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => {
                        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('header.howItWorks')}
                    </a>
                    <Link
                      to="/use-cases"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {t('header.useCases')}
                    </Link>
                    <a
                      href="#pricing"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => {
                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Pricing
                    </a>
                  </nav>

                  <div className="mt-auto mb-8 flex flex-col space-y-4">
                    <div className="flex justify-center">
                      <LanguageSwitcher />
                    </div>
                    <a
                      href={`https://app.wazzat.app?locale=${language}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-5 py-3 rounded-full text-base font-medium bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      {t('header.login')}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {!isMobile && (
        <div
          className={cn(
            "fixed inset-0 top-[61px] z-40 transform transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col h-full bg-white/95 backdrop-blur-lg shadow-xl p-6 text-foreground">
            <nav className="flex flex-col space-y-6 mt-8">
              <a
                href="#features"
                onClick={(e) => scrollToSection(e, 'features')}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {t('header.features')}
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => scrollToSection(e, 'how-it-works')}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {t('header.howItWorks')}
              </a>
              <Link
                to="/use-cases"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {t('header.useCases')}
              </Link>
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, 'pricing')}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </nav>

            <div className="mt-auto mb-8 flex flex-col space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <a
                href={`https://app.wazzat.app?locale=${language}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full text-base font-medium bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                {t('header.login')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
