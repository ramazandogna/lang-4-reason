// UI Components
import { ContentCard } from '@/components/ContentCard';

// Types
import { PostNode, PostResponse } from '@/types/posts';

function LatestPostsCards({ posts }: { posts: PostResponse }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {posts.nodes.slice(0, 3).map((post: PostNode) => (
        <ContentCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default LatestPostsCards;
