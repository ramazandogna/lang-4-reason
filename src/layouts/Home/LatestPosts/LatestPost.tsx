// React core
import React from 'react';

// Layouts
import { LatestPostsTitle } from './LatestPostsTitle';
import { LatestPostsCards } from './LatestPostsCards';

// Types
import { PostResponse } from '@/types/posts';

export default function LatestPosts({ posts }: { posts: PostResponse }) {
  return (
    <span className="flex flex-col gap-[64px]">
      <LatestPostsTitle />
      <LatestPostsCards posts={posts} />
    </span>
  );
}
