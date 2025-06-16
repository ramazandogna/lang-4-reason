'use client';

import { ContentCard } from '@/components/ui/ContentCard';
import { mockPosts } from '@/mocks/mockPosts'; // doğru path ile düzelt

function LatestPostsCards() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {mockPosts.slice(0, 3).map((post) => (
        <ContentCard
          key={post.id}
          image={post.image}
          avatar={post.avatar}
          category={post.category}
          title={post.title}
          desc={post.desc}
          author={post.author}
          readTime={post.readTime}
          slug={post.slug}
          id={post.id}
        />
      ))}
    </div>
  );
}

export default LatestPostsCards;
