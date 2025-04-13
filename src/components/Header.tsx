
import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
          <Link to="/" className="text-xl font-bold tracking-tighter text-primary">
            Hoolala
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/use-cases" className="text-sm font-medium hover:text-primary transition-colors">
              Use Cases
            </Link>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>
          
          <div className="hidden md:flex">
            <a 
              href="https://app.hoolala.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Login
            </a>
          </div>
          
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
        </div>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 top-[61px] z-40 transform transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full bg-white shadow-xl p-6">
          <nav className="flex flex-col space-y-6 mt-8">
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <Link 
              to="/use-cases" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </Link>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
          </nav>
          
          <div className="mt-auto mb-8">
            <a 
              href="https://app.hoolala.app" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full text-base font-medium bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
