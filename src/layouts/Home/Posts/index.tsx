import React from 'react';
import { PostsCards } from './PostsCards';
import { PostsNavbar } from './PostsNavbar';
import PostsPagination from './PostsPagination/PostsPagination';

function Posts() {
  return (
    <span className="flex flex-col gap-[64px] pt-4">
      <PostsNavbar />
      <PostsCards />
      <PostsPagination />
    </span>
  );
}

export default Posts;
