import { notFound } from 'next/navigation';
import { getCategoryDetails } from '@/data/getCategoryDetails';
import { getCategorySlugs } from '@/data/getCategorySlugs';
import getAllPosts from '@/data/getAllPosts';
import { PostResponse } from '@/types/posts';
import CategoryPosts from '@/layouts/Category/CategoryPosts/CategoryPosts';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();
  return slugs?.map((cat) => ({ slug: cat.slug })) || [];
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = await getCategorySlugs();
  const categoryDetails = await getCategoryDetails(slug);
  const categoryPosts: PostResponse = await getAllPosts(
    '',
    { key: 'categoryName', value: slug },
    6
  );

  const isValidSlug = slugs?.some((s) => slug === s.slug);
  if (!isValidSlug || !categoryDetails) {
    notFound();
  }

  console.log(categoryDetails);

  return (
    <CategoryPosts
      posts={categoryPosts}
      taxonomy={{ key: 'categoryName', value: slug }}
    />
  );
}
