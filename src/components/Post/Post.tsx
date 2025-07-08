import React from 'react';
import parse, { Element, DOMNode } from 'html-react-parser';
import { PostImage } from '@/components/PostImage';

export default function Post({ post }: { post: string }) {
  const options = {
    replace: (domNode: DOMNode) => {
      if (
        domNode.type === 'tag' &&
        domNode instanceof Element &&
        domNode.name === 'img'
      ) {
        const { src, alt } = domNode.attribs;
        return (
          <PostImage
            src={src}
            alt={alt}
            width={700}
            height={475}
            layout="responsive"
          />
        );
      }
    }
  };

  return (
    <div className="post-content prose prose-lg max-w-none">
      {parse(post, options)}
    </div>
  );
}
