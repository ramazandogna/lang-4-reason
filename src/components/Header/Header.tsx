// React & Next core imports
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// UI Components
import Link from '@/components/Link';
import { Button } from '@/components/Button';
import HamburgerIcon from '@/components/HamburgerIcon';

// Icons
import { SunMoon } from 'lucide-react';

// Context & Providers
import { useTheme } from '../../app/theme-provider';
import { useResponsive } from '@/context/ResponsiveContext';

// Constants
const navItems = [
  { name: 'Ana sayfa', path: '/' },
  { name: 'Yeni', path: '/new' },
  { name: 'Popüler', path: '/popular' },
  { name: 'Okuma listesi', path: '/readingList' },
  { name: 'Typography', path: '/typography' }
];

export default function Header() {
  // Hooks
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const { width, isClient } = useResponsive();

  // State
  const [open, setOpen] = useState(false);

  // Effects - Menu control and responsive behavior
  useEffect(() => {
    // Disable body scroll when menu is open
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Close menu on large screens
    if (width > 1024) {
      setOpen(false);
    }
  }, [open, width]);

  // Effects - Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // SSR protection
  if (!isClient) return null;

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 right-0 left-0 z-50 flex h-20 w-full items-center justify-center border-b border-[var(--text)]/10 bg-[var(--background)]/60 backdrop-blur-lg max-lg:h-18">
        <div className="container mx-auto flex w-full items-center justify-between">
          {/* Logo & Navigation */}
          <div className="flex gap-12">
            <Link href="/">
              <div className="text-3xl font-bold">Logo</div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="text-md flex items-center justify-center gap-8 font-bold max-lg:hidden">
              {navItems.slice(1).map((item) => (
                <Link variant="menu" key={item.path} href={item.path}>
                  <li className="my-auto">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-2">
            {/* Desktop CTA Buttons */}
            <Button className="max-lg:hidden" variant="secondary">
              İletişime Geç
            </Button>
            <Button className="max-lg:hidden" variant="primary" color="gray">
              Ücretsiz Dene
            </Button>

            {/* Theme Toggle */}
            <Button
              iconOnly
              leftIcon={<SunMoon size={24} />}
              variant="primary"
              className="max-lg:hidden"
              color="theme"
              onClick={toggleTheme}
            />

            {/* Mobile Menu Toggle */}
            <span className="lg:hidden">
              <HamburgerIcon checked={open} onChange={setOpen} />
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 right-0 bottom-0 left-0 z-40 transition-opacity lg:hidden! ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-sm dark:bg-black/20"
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`max-h-100vh fixed top-0 right-0 bottom-0 w-80 transform overflow-y-auto bg-[var(--background)]/60 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="p-6">
            {/* Mobile Navigation Items */}
            <ul className="space-y-6 pt-14">
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
    </>
  );
}
