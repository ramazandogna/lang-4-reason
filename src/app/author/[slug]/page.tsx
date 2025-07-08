import { notFound } from 'next/navigation';
import { getAuthorSlugs } from '@/data/getAuthotSlugs';
import { getAuthorDetails } from '@/data/getAuthorDetails';
import getAllPosts from '@/data/getAllPosts';
import { PostResponse } from '@/types/posts';
import AuthorPosts from '@/layouts/Author/AuthorPosts/AuthorPosts';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAuthorSlugs();
  return slugs?.map((author) => ({ slug: author.slug })) || [];
}

export default async function AuthorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = await getAuthorSlugs();
  const authorDetails = await getAuthorDetails(slug);
  const authorPosts: PostResponse = await getAllPosts(
    '',
    { key: 'author', value: slug },
    6
  );

  const isValidSlug = slugs?.some((s) => slug === s.slug);
  if (!isValidSlug || !authorDetails) {
    notFound();
  }

  console.log(authorDetails);

  return (
    <AuthorPosts
      posts={authorPosts}
      taxonomy={{ key: 'author', value: slug }}
    />
  );
}
