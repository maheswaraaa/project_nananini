import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { en } from '@/locales/en';
import { id } from '@/locales/id';
import { SITE_CONFIG, getCurrentYear } from '@/config/site';

type Lang = 'en' | 'id';

interface Translations {
  [key: string]: string | Translations;
}

const translations: Record<Lang, Translations> = {
  en: en as unknown as Translations,
  id: id as unknown as Translations,
};

function getNestedValue(obj: Translations, path: string): string {
  const keys = path.split('.');
  let current: Translations | string = obj;
  for (const key of keys) {
    if (typeof current === 'string') return path;
    current = current[key];
    if (current === undefined) return path;
  }
  return typeof current === 'string' ? current : path;
}

/**
 * Interpolate dynamic placeholders in translation strings:
 *   {{year}}            → current year (e.g. 2026)
 *   {{yearsInBusiness}} → years since founding
 */
function interpolate(value: string): string {
  return value
    .replace(/\{\{year\}\}/g, String(getCurrentYear()))
    .replace(
      /\{\{yearsInBusiness\}\}/g,
      String(getCurrentYear() - SITE_CONFIG.foundingYear)
    );
}

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => { },
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nananini-lang');
      if (stored === 'en' || stored === 'id') return stored;
    }
    return 'id';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('nananini-lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string): string => {
      const raw = getNestedValue(translations[lang], key);
      return interpolate(raw);
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
