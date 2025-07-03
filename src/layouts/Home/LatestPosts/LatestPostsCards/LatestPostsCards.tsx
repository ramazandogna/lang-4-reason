// UI Components
import { ContentCard } from '@/components/ContentCard';

// Types
import { PostNode, PostResponse } from '@/types/posts';
import { generateBlurDataURL } from '@/utils/plaiceholder';

async function getPostsWithBlur(posts: PostNode[]) {
  return Promise.all(
    posts.map(async (post) => {
      const src = post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl;
      const blurDataURL = src ? await generateBlurDataURL(src) : undefined;
      return { ...post, blurDataURL };
    })
  );
}

export default async function LatestPostsCards({
  posts
}: {
  posts: PostResponse;
}) {
  const postsWithBlur = await getPostsWithBlur(posts.nodes.slice(0, 6));
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {postsWithBlur.map((post) => (
        <ContentCard
          key={post.slug}
          post={post}
          blurDataURL={post.blurDataURL}
        />
      ))}
    </div>
  );
}
