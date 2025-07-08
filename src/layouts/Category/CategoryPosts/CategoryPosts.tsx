'use client';
import React, { useState } from 'react';
import GetMorePost from '@/components/GetMorePost';
import type { PostResponse } from '@/types/posts';

export default function CategoryPosts({
  posts,
  taxonomy
}: {
  posts: PostResponse;
  taxonomy: { key: string; value: string };
}) {
  const [contents, setContents] = useState<PostResponse>(posts);
  console.log(contents);
  console.log(contents.nodes.map((e) => e.title));
  return (
    <GetMorePost
      contents={contents}
      setContents={setContents}
      taxonomy={taxonomy}
    />
  );
}
