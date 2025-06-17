import { Section } from '@/components/ui/Section';
import React from 'react';
import { LatestPosts } from './LatestPosts';
import { Posts } from './Posts';
import { Newsletter } from './Newsletter';

function Home() {
  return (
    <>
      <Section className="container mx-auto w-full pt-16! max-md:pt-8!">
        <LatestPosts />
      </Section>
      <Section className="container mx-auto w-full pt-0!">
        <Posts />
      </Section>
      <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16!">
        <span className="container">
          <Newsletter />
        </span>
      </Section>
    </>
  );
}

export default Home;
