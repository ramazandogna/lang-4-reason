import getAllPosts from '@/data/getAllPosts';
import Home from '@/layouts/Home';

const posts = await getAllPosts('', null, 100);

export default function HomePage() {
  return (
    <>
      <Home posts={posts} />
    </>
  );
}
