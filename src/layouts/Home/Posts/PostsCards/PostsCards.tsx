'use client';

import { ContentCard } from '@/components/ui/ContentCard';
import { mockPosts } from '@/mocks/mockPosts'; // doğru path ile düzelt
import React from 'react';

function PostsCards() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {mockPosts.map((post) => (
        <ContentCard
          key={post.id}
          postImage={post.image}
          avatar={post.avatar}
          category={post.category}
          title={post.title}
          desc={post.desc}
          author={post.author}
          readTime={post.readTime}
        />
      ))}
    </div>
  );
}

export default PostsCards;
