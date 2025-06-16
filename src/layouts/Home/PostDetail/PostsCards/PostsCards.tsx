'use client';

import { ContentCard } from '@/components/ui/ContentCard';
import React from 'react';
import { mockPosts } from '@/mocks/mockPosts'; // type için gerekirse

type Props = {
  posts: typeof mockPosts;
};

function PostsCards({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
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

export default PostsCards;
