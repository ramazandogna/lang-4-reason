// Data/API
import getAllPosts from '@/data/getAllPosts';

// Layouts
import { LatestPosts } from '@/layouts/Home/LatestPosts';

export default async function LatestContent() {
  const posts = await getAllPosts('', null, 3);

  return <LatestPosts posts={posts} />;
}
