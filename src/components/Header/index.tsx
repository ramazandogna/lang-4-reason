'use client';
import { SunMoon } from 'lucide-react';

import { useLayoutEffect, useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useLayoutEffect(() => {
    // Başlangıç değerini HTML'den al
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(initialTheme || 'light');
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // DOM'u güncelle
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
    <header className="bg-[var(--secondary-bg)] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-[var(--text)]">Logo</h1>
        <button
          onClick={toggleTheme}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-[var(--background)]"
        >
          <SunMoon />
        </button>
      </div>
    </header>
  );
}
