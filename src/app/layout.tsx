// Global styles
import '../styles/globals.css';
import '../styles/animates.css';

// Next.js & React core
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Utils
import { getInitialTheme } from '@/utils/get-initial-theme';
import { generateMetadata } from '@/utils/seo';

// Providers
import { ThemeProvider } from './theme-provider';
import { ResponsiveProvider } from '@/context/ResponsiveContext';

// UI Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ErrorBoundary from '@/components/errorBoundary';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  ...generateMetadata()
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = await getInitialTheme();

  return (
    <html
      lang="tr"
      data-theme={theme}
      className={plusJakarta.variable}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col justify-center bg-[var(--background)] text-[var(--text)] transition-colors duration-300">
        <ThemeProvider defaultTheme={theme}>
          <ResponsiveProvider>
            <Header />
            <main className="pt-20! pb-6">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <Footer />
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
