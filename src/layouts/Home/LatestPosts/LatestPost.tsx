import React from 'react';
import { LatestPostsTitle } from './LatestPostsTitle';
import { LatestPostsCards } from './LatestPostsCards';
import { PostResponse } from '@/types/posts';

export default function LatestPosts({ posts }: { posts: PostResponse }) {
  const lastThree = posts.nodes.slice(0, 3);

  return (
    <span className="flex flex-col gap-[64px]">
      <LatestPostsTitle />
      <LatestPostsCards posts={{ ...posts, nodes: lastThree }} />
    </span>
  );
}
