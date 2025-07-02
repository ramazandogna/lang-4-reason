// Data/API
import getAllPosts from '@/data/getAllPosts';

// Layouts
import { LatestPosts } from '@/layouts/Home/LatestPosts';

// Utils
import { generateBlurDataURL } from '@/utils/plaiceholder';

export default async function LatestContent() {
  const posts = await getAllPosts('', null, 3);

  // İlk post'un featured image'ı için blur oluştur
  const firstPostImage =
    posts.nodes[0]?.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl;
  const blurDataURL = firstPostImage
    ? await generateBlurDataURL(firstPostImage)
    : undefined;

  return <LatestPosts posts={posts} blurDataURL={blurDataURL} />;
}
