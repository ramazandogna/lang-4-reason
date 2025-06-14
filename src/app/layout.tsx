import '../styles/globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { getInitialTheme } from '@/lib/get-initial-theme';
import { ThemeProvider } from './theme-provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResponsiveProvider } from '@/context/ResponsiveContext';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Lang for Reason',
  description: 'Amacına uygun dil öğrenme platformu'
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
            <main className="pt-20! pb-6">{children}</main>
            <Footer />
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
