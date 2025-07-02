'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';

type ResponsiveContextType = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'mobile' | 'tablet' | 'desktop';
  isClient: boolean; // newly added
};

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    setIsClient(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = size;
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;
  const breakpoint: 'mobile' | 'tablet' | 'desktop' = isMobile
    ? 'mobile'
    : isTablet
      ? 'tablet'
      : 'desktop';

  const value: ResponsiveContextType = {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    breakpoint,
    isClient
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  const ctx = useContext(ResponsiveContext);
  if (!ctx)
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  return ctx;
}
