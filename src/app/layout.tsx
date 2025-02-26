import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import '../styles/globals.css';
import Header from '@/components/Header';

const openSans = Open_Sans({
  variable: '--font-open-sans', // Open Sans için CSS değişkeni tanımlıyoruz
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Kullanılacak font ağırlıkları
  display: 'swap' // Performans için önerilen ayar
});

export const metadata: Metadata = {
  title: 'PekAfilli',
  description: 'PekAfilli şeyler'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cookie'den tema bilgisini al
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  const initialTheme = theme?.value || 'light';

  return (
    <html
      lang="en"
      data-theme={initialTheme}
      style={{ '--main-color': '#171717' } as React.CSSProperties}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
