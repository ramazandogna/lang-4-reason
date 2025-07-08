import { notFound } from 'next/navigation';
import { getTagSlugs } from '@/data/getTagSlugs';
import { getTagDetails } from '@/data/getTagDetails';
import getAllPosts from '@/data/getAllPosts';
import { PostResponse } from '@/types/posts';
import TagPosts from '@/layouts/Tag/TagPosts/TagPosts';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getTagSlugs();
  return slugs?.map((tag) => ({ slug: tag.slug })) || [];
}

export default async function TagPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = await getTagSlugs();
  const tagDetails = await getTagDetails(slug);
  const tagPosts: PostResponse = await getAllPosts(
    '',
    { key: 'tag', value: slug },
    6
  );

  const isValidSlug = slugs?.some((s) => slug === s.slug);
  if (!isValidSlug || !tagDetails) {
    notFound();
  }

  console.log(tagDetails);

  return <TagPosts posts={tagPosts} taxonomy={{ key: 'tag', value: slug }} />;
}
