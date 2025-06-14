'use client';
import { SunMoon } from 'lucide-react';
import Link from '@/components/ui/Link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/theme-provider';
import HamburgerIcon from '../ui/HamburgerIcon';
import { useEffect, useState } from 'react';
import { useResponsive } from '@/context/ResponsiveContext';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Ana sayfa', path: '/' },
  { name: 'Yeni', path: '/new' },
  { name: 'Popüler', path: '/Popular' },
  { name: 'Okuma listesi', path: '/ReadingList' },
  { name: 'Typography', path: '/Typography' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const { width, isClient } = useResponsive();

  useEffect(() => {
    // Menü açıksa body scroll'u engelle
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Ekran genişliği büyüyünce menüyü kapat
    if (width > 1024) {
      setOpen(false);
    }
  }, [open, width]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!isClient) return null;

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex h-20 w-full items-center justify-center border-b border-[var(--text)]/10 bg-[var(--background)]/60 backdrop-blur-lg max-lg:h-18">
        <div className="container mx-auto flex w-full items-center justify-between">
          <div className="flex gap-12">
            <Link href="/">
              <div className="text-3xl font-bold">Logo</div>
            </Link>
            <ul className="text-md flex items-center justify-center gap-8 font-bold max-lg:hidden">
              {navItems.slice(1).map((item) => (
                <Link variant="menu" key={item.path} href={item.path}>
                  <li className="my-auto">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button className="max-lg:hidden" variant="secondary">
              İletişime Geç
            </Button>
            <Button className="max-lg:hidden" variant="primary" color="gray">
              Ücretsiz Dene
            </Button>
            <Button
              iconOnly
              leftIcon={<SunMoon size={24} />}
              variant="primary"
              className="max-lg:hidden"
              color="theme"
              onClick={toggleTheme}
            />
            <span className="lg:hidden">
              <HamburgerIcon checked={open} onChange={setOpen} />
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 bottom-0 left-0 z-40 transition-opacity lg:hidden! ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-sm dark:bg-black/20"
          onClick={() => setOpen(false)}
        />
        {/* Mobile Menu */}
        <div
          className={`max-h-100vh fixed top-0 right-0 bottom-0 w-80 transform overflow-y-auto bg-[var(--background)]/60 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="p-6">
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
