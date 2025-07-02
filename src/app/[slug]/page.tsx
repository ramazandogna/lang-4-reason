import { notFound } from 'next/navigation';
import PostDetail from '@/layouts/PostDetail';
import { getSinglePost } from '@/data/getSinglePost';
import { getPostSlugs } from '@/data/getPostSlugs';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs?.map((post) => ({ slug: post.slug })) || [];
}

export const dynamicParams = false;
export const revalidate = 60;

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
  const post = await getSinglePost(params.slug);
  const slugs = await getPostSlugs(params.slug);
  const isValidSlug = slugs?.some((s) => params.slug === s.slug);
  if (!isValidSlug || !post) notFound();

  return <PostDetail post={post} />;
}
