import React from 'react';
import { PostsCards } from './PostsCards';
import { PostsHeader } from './PostsHeader';
import PostsPagination from './PostsPagination/PostsPagination';

function Posts() {
  return (
    <span className="flex flex-col gap-[64px] pt-4 max-md:gap-[40px]">
      <PostsHeader />
      <PostsCards />
      <PostsPagination />
    </span>
  );
}

export default Posts;
