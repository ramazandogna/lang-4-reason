import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import getAllPosts from '@/data/getAllPosts';
import { LatestPosts } from '@/layouts/Home/LatestPosts';
import StructuredData from '@/components/structuredData';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

// Lazy load edilecek bileşenler - sadece gerekli olanlar görünür olduktan sonra yüklenecek
const Posts = dynamic(() => import('../layouts/Home/Posts/Posts'));

const Newsletter = dynamic(
  () => import('../layouts/Home/Newsletter/Newsletter')
);

// Cache süresi ve revalidation
export const revalidate = 3600; // 1 saat cache

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Amacına İngilizce - İngilizce Öğrenme Kaynakları';
  const description =
    'İngilizce öğrenmek için en güncel kaynaklara ulaşın. Pratik yöntemler, dil bilgisi ipuçları ve etkili öğrenme stratejileri ile İngilizce seviyenizi geliştirin.';
  const image = '/og-image.jpg'; // Ana sayfa için özel OG image

  return generateSEOMetadata({
    title,
    description,
    image,
    url: 'https://amacinaingilize.com',
    type: 'website'
  });
}

export default async function HomePage() {
  // Posts verisi - server-side'da fetch edilir
  const posts = await getAllPosts('', null, 100);

  return (
    <>
      <StructuredData
        title="Amacına İngilizce - İngilizce Öğrenme Kaynakları"
        description="İngilizce öğrenmek için en güncel kaynaklara ulaşın. Pratik yöntemler, dil bilgisi ipuçları ve etkili öğrenme stratejileri ile İngilizce seviyenizi geliştirin."
        image="/og-image.jpg"
        url="https://amacinaingilize.com"
        type="WebSite"
      />

      {/* Critical content - hemen yüklenir */}
      <Section className="container mx-auto w-full pt-16 max-md:pt-8">
        <LatestPosts posts={posts} />
      </Section>

      {/* Below-the-fold content - lazy loading ile */}
      <Suspense
        fallback={
          <Section className="container mx-auto w-full md:pt-0!">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded bg-gray-200"
                />
              ))}
            </div>
          </Section>
        }
      >
        <Section className="container mx-auto w-full md:pt-0!">
          <Posts posts={posts} />
        </Section>
      </Suspense>

      <Suspense
        fallback={
          <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16">
            <div className="container h-32 animate-pulse rounded bg-gray-200" />
          </Section>
        }
      >
        <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 md:py-16!">
          <span className="container">
            <Newsletter />
          </span>
        </Section>
      </Suspense>
    </>
  );
}
