import '../styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { getInitialTheme } from '@/lib/get-initial-theme';
import { ThemeProvider } from './theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'PekAfilli',
  description: 'PekAfilli şeyler'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = await getInitialTheme();

  return (
    <html lang="en" data-theme={theme} className={openSans.variable}>
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--text)] transition-colors duration-300">
        <ThemeProvider defaultTheme={theme}>
          <Header />

          <main className="container w-full flex-1 px-4 py-6 md:px-8">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
