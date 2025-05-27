import { useLanguage } from '@/lib/language-context';
import en from '@/translations/en.json';
import fr from '@/translations/fr.json';
import nl from '@/translations/nl.json';

const translations = {
  en,
  fr,
  nl,
} as const;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return value || key;
  };

  return { t, language };
};
