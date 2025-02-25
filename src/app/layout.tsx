import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
