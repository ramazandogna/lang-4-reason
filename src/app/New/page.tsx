// Page component for /new
// Next.js & React core
import type { Metadata } from 'next';

// SEO & Utils
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import { SITE } from '@/constant';

// UI Components
import { Section } from '@/components/Section';

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Yeni İçerikler',
    description: 'En yeni blog yazıları ve içerikler',
    url: `${SITE.URL}/new`,
    type: 'website'
  });
}

export default function NewPage() {
  return (
    <>
      <Section className="container mx-auto pt-24 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Yeni İçerikler
          </h1>
          <p className="text-lg text-gray-600">
            En güncel blog yazıları ve içerikler burada yer alacak.
          </p>
        </div>
      </Section>
    </>
  );
}
