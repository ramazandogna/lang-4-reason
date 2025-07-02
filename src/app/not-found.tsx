// UI Components
import Link from '@/components/ui/Link';

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center text-[var(--text)]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="mt-4 inline-block rounded-md px-6 py-3 text-[var(--background)] transition-opacity hover:opacity-80"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
