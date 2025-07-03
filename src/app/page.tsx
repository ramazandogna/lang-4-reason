// React & Next core imports
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// UI Components
import { Section } from '@/components/Section';
import StructuredData from '@/components/structuredData';

// Layouts
import { LatestPosts } from '@/layouts/Home/LatestPosts';

// Data/API
import getAllPosts from '@/data/getAllPosts';

// SEO & Utils
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import { SITE, SEO } from '@/constant';

// Lazy loaded components (only loaded when visible)
const Posts = dynamic(() => import('@/layouts/Home/Posts/Posts'));
const Newsletter = dynamic(
  () => import('@/layouts/Home/Newsletter/Newsletter')
);

// Revalidation config
export const revalidate = 3600; // 1h
export const dynamicParams = false;

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    image: SEO.DEFAULT_IMAGE,
    url: SITE.URL,
    type: 'website'
  });
}

export default async function HomePage() {
  const posts = await getAllPosts('', null, 100);
  return (
    <>
      <StructuredData
        title={SEO.DEFAULT_TITLE}
        description={SEO.DEFAULT_DESCRIPTION}
        image={SEO.DEFAULT_IMAGE}
        url={SITE.URL}
        type="WebSite"
      />
      {/* Critical content - loads immediately */}
      <Section className="container mx-auto w-full pt-16 max-md:pt-8">
        <LatestPosts posts={posts} />
      </Section>

      {/* Below-the-fold content - lazy loaded */}
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
