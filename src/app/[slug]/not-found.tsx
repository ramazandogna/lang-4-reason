// UI Components
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1 className="mb-4 text-4xl font-bold">Yazı Bulunamadı</h1>
      <p className="mb-6">Aradığınız yazıya şu anda ulaşılamıyor.</p>
      <Link href="/" className="text-blue-600 underline hover:text-blue-800">
        Ana sayfaya dön
      </Link>
    </div>
  );
}
