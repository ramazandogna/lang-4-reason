'use client';
import React, { useState } from 'react';
import { PostResponse } from '../../types/posts';

export default function GetMorePost({
  contents,
  setContents,
  taxonomy
}: {
  contents: PostResponse;
  setContents: (posts: PostResponse) => void;
  taxonomy: { key: string | null; value: string | null };
}) {
  const [postsLoading, setPostsLoading] = useState(false);
  const [noMorePost, setNoMorePost] = useState(false);

  const getMorePost = async () => {
    if (postsLoading || noMorePost) return;
    setPostsLoading(true);
    const params = new URLSearchParams();
    params.set('cursor', contents.pageInfo.endCursor || '');
    if (taxonomy.key && taxonomy.value) {
      params.set(taxonomy.key, taxonomy.value);
    }
    const response = await fetch(`/api/posts?${params.toString()}`);
    const morePost = await response.json();
    let updatePosts: PostResponse = {
      pageInfo: morePost.pageInfo,
      nodes: [...contents.nodes, ...morePost.nodes]
    };
    setTimeout(() => {
      setPostsLoading(false);
      setContents(updatePosts);
    }, 500);
    setNoMorePost(!morePost.pageInfo.hasNextPage);
  };

  return (
    <div
      onClick={getMorePost}
      style={{
        cursor: postsLoading || noMorePost ? 'not-allowed' : 'pointer',
        opacity: noMorePost ? 0.5 : 1,
        marginTop: 25,
        display: 'flex',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '2px solid #eee',
        fontWeight: 'bold',
        fontSize: 14
      }}
    >
      {postsLoading
        ? 'Yükleniyor...'
        : noMorePost
          ? 'Daha fazla yok'
          : 'Daha fazla göster'}
    </div>
  );
}
