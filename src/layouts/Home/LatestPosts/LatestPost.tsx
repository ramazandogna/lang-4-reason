import React from 'react';
import { LatestPostsTitle } from './LatestPostsTitle';
import { LatestPostsCards } from './LatestPostsCards';

function LatestPosts() {
  return (
    <span className="flex flex-col gap-[64px]">
      <LatestPostsTitle />
      <LatestPostsCards />
    </span>
  );
}

export default LatestPosts;
