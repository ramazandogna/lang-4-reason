import React from 'react';
import { LatestPostsTitle } from './LatestPostsTitle';
import { LatestPostsCards } from './LatestPostsCards';
import { PostResponse } from '@/types/posts';

export default function LatestPosts({ posts }: { posts: PostResponse }) {
  return (
    <span className="flex flex-col gap-[64px]">
      <LatestPostsTitle />
      <LatestPostsCards posts={posts} />
    </span>
  );
}
