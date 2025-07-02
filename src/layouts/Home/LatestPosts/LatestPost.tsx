// React core
import React from 'react';

// Layouts
import { LatestPostsTitle } from './LatestPostsTitle';
import { LatestPostsCards } from './LatestPostsCards';

// Types
import { PostResponse } from '@/types/posts';

export default function LatestPosts({
  posts,
  blurDataURL
}: {
  posts: PostResponse;
  blurDataURL?: string;
}) {
  return (
    <span className="flex flex-col gap-[64px]">
      <LatestPostsTitle />
      <LatestPostsCards posts={posts} blurDataURL={blurDataURL} />
    </span>
  );
}
