// Next.js & React core
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Data/API
import { getSinglePost } from '@/data/getSinglePost';
import { getPostSlugs } from '@/data/getPostSlugs';

// SEO & Utils
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

// UI Components
import { Section } from '@/components/Section';
import StructuredData from '@/components/structuredData';

// Layouts
import { Hero } from '@/layouts/PostDetail/Hero';
import { Content } from '@/layouts/PostDetail/Content';

// Lazy loaded components (only loaded when visible)
const LatestContent = dynamic(
  () => import('@/layouts/PostDetail/Content/LatestContent/LatestContent')
);
const Newsletter = dynamic(
  () => import('@/layouts/Home/Newsletter/Newsletter')
);

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs?.map((post) => ({ slug: post.slug })) || [];
}

export const dynamicParams = false;
export const revalidate = 60; // 1 hour cache

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getSinglePost(params.slug);
  if (!post) return {};

  const description = post.excerpt
    ? post.excerpt.replace(/^<p>|<\/p>\n$/g, '').trim()
    : post.content
        .slice(0, 150)
        .replace(/<[^>]*>/g, '')
        .trim();

  const image =
    post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl || '';

  return generateSEOMetadata({
    title: post.title,
    description,
    image,
    url: `https://amacinaingilize.com/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified,
    author: post.author.node.name
  });
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  // Parallel data fetching
  const [post, slugs] = await Promise.all([
    getSinglePost(params.slug),
    getPostSlugs(params.slug)
  ]);

  const isValidSlug = slugs?.some((s) => params.slug === s.slug);
  if (!isValidSlug || !post) notFound();

  return (
    <>
      <StructuredData
        title={post.title}
        description={
          post.excerpt ? post.excerpt.replace(/^<p>|<\/p>\n$/g, '').trim() : ''
        }
        image={post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl}
        url={`https://amacinaingilize.com/${post.slug}`}
        type="Article"
        publishedTime={post.date}
        modifiedTime={post.modified}
        author={post.author.node.name}
      />
      {/* Critical content - loads immediately */}
      <Section className="container mx-auto pt-24 pb-0 max-md:pt-16 max-md:pb-10 md:pb-16!">
        <Hero hero={post} />
      </Section>

      <Section className="container mx-auto my-0! py-0! md:my-0! md:py-0!">
        <div className="post-container mx-auto">
          <Content post={post} />
        </div>
      </Section>

      {/* Below-the-fold content - lazy loaded */}
      <Suspense
        fallback={
          <Section className="container mx-auto">
            <div className="h-64 animate-pulse rounded bg-gray-200" />
          </Section>
        }
      >
        <Section className="container mx-auto">
          <LatestContent />
        </Section>
      </Suspense>

      <Suspense
        fallback={
          <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16">
            <div className="container h-32 animate-pulse rounded bg-gray-200" />
          </Section>
        }
      >
        <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16">
          <span className="container">
            <Newsletter />
          </span>
        </Section>
      </Suspense>
    </>
  );
}
