import React from 'react';
import { Content } from './Content';
import { ContentProps } from './Content/Content.types';

function PostDetail({ post }: { post: ContentProps }) {
  return <Content post={post} />;
}

export default PostDetail;
