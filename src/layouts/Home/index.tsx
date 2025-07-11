// Next
import dynamic from 'next/dynamic';

// UI Components
import { Section } from '@/components/Section';

// Layouts
import { LatestPosts } from './LatestPosts';
import { Newsletter } from './Newsletter';

// Types
import { PostResponse } from '@/types/posts';

// Lazy Imports
// Lazy loaded components (only loaded when visible)
const Posts = dynamic(() => import('./Posts/Posts'));

function Home({ posts }: { posts: PostResponse }) {
  return (
    <>
      <Section className="container mx-auto w-full pt-16! max-md:pt-8!">
        <LatestPosts posts={posts} />
      </Section>
      <Section className="container mx-auto w-full pt-0!">
        <Posts posts={posts} />
      </Section>
      <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16!">
        <span className="container">
          <Newsletter />
        </span>
      </Section>
    </>
  );
}

export default Home;
