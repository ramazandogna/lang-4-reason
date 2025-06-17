import React from 'react';
import { Content } from './Content';
import { ContentHeroProps, ContentProps } from './Content/Content.types';
import { Hero } from './Hero';

function PostDetail({ post }: { post: ContentProps }) {
  const hero: ContentHeroProps = {
    postImage: post.postImage,
    category: post.category,
    title: post.title || '',
    author: post.author,
    readTime: post.readTime
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="container mx-auto">
        <Hero hero={hero} />
      </div>
      <div className="post-container mx-auto">
        <Content post={post} />
      </div>
    </div>
  );
}

export default PostDetail;
