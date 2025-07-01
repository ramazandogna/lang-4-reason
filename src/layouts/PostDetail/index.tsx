import React from 'react';
import { Content } from './Content';
import { Hero } from './Hero';
import { MockPostType } from '@/types/Mock/Mock.types.ts';
import { LatestContent } from './Content/LatestContent';
import { Newsletter } from '../Home/Newsletter';
import { Section } from '@/components/ui/Section';

function PostDetail({ post }: { post: MockPostType }) {
  return (
    <>
      <Section className="container mx-auto pt-24! pb-0! max-md:pt-16! max-md:pb-10!">
        <Hero hero={post} />
      </Section>
      <Section className="container mx-auto pt-16!">
        <div className="post-container mx-auto">
          <Content post={post} />
        </div>
      </Section>
      <Section className="container mx-auto">
        <LatestContent />
      </Section>
      <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16!">
        <span className="container">
          <Newsletter />
        </span>
      </Section>
    </>
  );
}

export default PostDetail;
