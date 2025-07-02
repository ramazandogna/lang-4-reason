import getAllPosts from '@/data/getAllPosts';
import { LatestPosts } from '@/layouts/Home/LatestPosts';

export default async function LatestContent() {
  const posts = await getAllPosts('', null, 3);

  return <LatestPosts posts={posts} />;
}
