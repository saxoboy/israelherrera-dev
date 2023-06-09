import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface PortfolioContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

export const PortfolioContext = createContext({} as PortfolioContextProps);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark');
    setLanguage(localStorage.getItem('language') || 'en');
  }, [theme, language]);

  return (
    <PortfolioContext.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  const { theme, setTheme, language, setLanguage } = context;
  return { theme, setTheme, language, setLanguage };
}
