import { ContentCard } from '@/components/ui/ContentCard';
import React from 'react';
import { PostResponse } from '@/types/posts';

function PostsCards({ posts }: { posts: PostResponse }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.nodes.map((post: any) => (
        <ContentCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default PostsCards;
