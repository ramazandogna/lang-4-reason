import getAllPosts from '@/data/getAllPosts';
import Home from '@/layouts/Home';
import { LatestPosts } from '@/layouts/Home/LatestPosts';
import { Newsletter } from '@/layouts/Home/Newsletter';
import { Posts } from '@/layouts/Home/Posts';
import { Section } from 'lucide-react';

const posts = await getAllPosts('', null, 100);

export default function HomePage() {
  return (
    <>
      <Home posts={posts} />
    </>
  );
}
