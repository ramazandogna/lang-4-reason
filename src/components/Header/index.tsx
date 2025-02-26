'use client';
import { SunMoon } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Ana sayfa', path: '/' },
  { name: 'Popüler', path: '/Popular' },
  { name: 'Yeni', path: '/New' },
  { name: 'Okuma listesi', path: '/ReadingList' }
];

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Başlangıç değerini HTML'den al
    const initialTheme = document.documentElement.getAttribute('data-theme') as
      | 'light'
      | 'dark';
    setTheme(initialTheme || 'dark');
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);

    // API'ye tema değişikliğini bildir
    await fetch('/api/theme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ theme: newTheme })
    });
  };

  return (
    <header className="container pb-[98px] pt-[60px]">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[var(--text)]">PEKAFİLLİ</h1>
        <div className="flex w-full items-center justify-end gap-8">
          <ul className="flex items-center justify-center gap-8 font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`cursor-pointer rounded px-4 py-2 ${
                    pathname === item.path
                      ? 'bg-[var(--accent)] text-[var(--background)] transition-colors'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="rounded-md bg-[var(--accent)] px-4 py-2 text-[var(--background)]"
          >
            <SunMoon />
          </button>
        </div>
      </div>
    </header>
  );
}
