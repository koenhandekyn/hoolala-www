import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

type Language = {
  code: 'en' | 'fr' | 'nl';
  name: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'nl', name: 'Nederlands' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (languageCode: 'en' | 'fr' | 'nl') => {
    setLanguage(languageCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" aria-label="Switch language">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`text-xs cursor-pointer ${language === lang.code ? 'bg-muted' : ''}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
