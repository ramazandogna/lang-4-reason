import { ContentCard } from '@/components/ui/ContentCard';
import { avatarImages } from '@/images/avatar-images';
import { postImages } from '@/images/post-images';
import React from 'react';

function PostsCards() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {postImages.map((postImage, i) => (
        <ContentCard
          key={i}
          postImage={postImage}
          avatar={avatarImages[i % avatarImages.length]}
          category="UI/UX Design"
          title="Blog post title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
          author="Azunyan U. Wu"
          readTime="5min read"
        />
      ))}
    </div>
  );
}

export default PostsCards;
