'use client';
import { SunMoon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/theme-provider';
import HamburgerIcon from '../ui/HamburgerIcon';
import { useState } from 'react';

const navItems = [
  { name: 'Ana sayfa', path: '/' },
  { name: 'Yeni', path: '/new' },
  { name: 'Popüler', path: '/Popular' },
  { name: 'Okuma listesi', path: '/ReadingList' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <>
      <header className="flex h-20 w-full items-center justify-center pt-6 max-md:h-18">
        <div className="container mx-auto flex w-full items-center justify-between">
          <div className="flex gap-12">
            <Link href="/">
              <div className="text-3xl font-bold">Logo</div>
            </Link>
            <ul className="text-md flex items-center justify-center gap-8 font-bold max-md:hidden">
              {navItems.slice(1).map((item) => (
                <Link key={item.path} href={item.path}>
                  <li className="my-auto">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="max-md:hidden">Button 1</div>
            <div className="max-md:hidden">Button 2</div>
            <span className="md:hidden">
              <HamburgerIcon checked={open} onChange={setOpen} />
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-white/20 backdrop-blur-sm dark:bg-black/20"
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed top-0 right-0 h-full w-80 transform transition-all duration-500 ease-in-out"
            style={{
              backgroundColor: 'var(--background)',
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              opacity: open ? '1' : '0'
            }}
          >
            <div className="p-6">
              {/* Header with Logo and Close Button */}
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" onClick={() => setOpen(false)}>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: 'var(--text)' }}
                  >
                    Logo
                  </div>
                </Link>
                <HamburgerIcon checked={open} onChange={setOpen} />
              </div>

              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} onClick={() => setOpen(false)}>
                      <div
                        className="text-lg font-bold"
                        style={{ color: 'var(--text)' }}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
