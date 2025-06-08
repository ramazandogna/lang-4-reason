'use client';
import { SunMoon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/theme-provider';

const navItems = [
  { name: 'Ana sayfa', path: '/' },
  { name: 'Popüler', path: '/Popular' },
  { name: 'Yeni', path: '/New' },
  { name: 'Okuma listesi', path: '/ReadingList' },
  { name: '404', path: '/404' }
];

export default function Header() {
  const pathname = usePathname();

  const { toggleTheme } = useTheme();

  return (
    <header className="container pt-[60px] pb-[98px]">
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
            className="cursor-pointer rounded-md bg-[var(--accent)] px-4 py-2 text-[var(--background)]"
          >
            <SunMoon />
          </button>
        </div>
      </div>
    </header>
  );
}
