import { PostType } from '../types/post';
import graphqlRequest from './graphqlRequest';
import { getPlaiceholder } from 'plaiceholder';

const query = `
  query getSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      content(format: RENDERED)
      modified
      slug
      title(format: RENDERED)
      databaseId
      featuredImage {
        node {
          mediaDetails {
            sizes {
              sourceUrl
              width
              height
            }
          }
        }
      }
      commentCount
      categories {
        nodes {
          name
          slug
          link
        }
      }
      date
      excerpt(format: RENDERED)
      author {
        node {
          name
          slug
          uri
          avatar {
            url
          }
        }
      }
    }
  }
`;

async function enrichPostWithBlur(post: PostType) {
  const src =
    post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl || '';
  let blurDataURL = undefined;
  if (src) {
    try {
      const response = await fetch(src);
      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        const result = await getPlaiceholder(buffer);
        blurDataURL = result.base64;
      }
    } catch {}
  }

  // Author avatar için de blur ekle
  let authorAvatarBlur = undefined;
  const avatarUrl = post.author?.node?.avatar?.url;
  if (avatarUrl) {
    try {
      const response = await fetch(avatarUrl);
      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        const result = await getPlaiceholder(buffer);
        authorAvatarBlur = result.base64;
      }
    } catch {}
  }

  return {
    ...post,
    blurDataURL,
    author: {
      ...post.author,
      node: {
        ...post.author?.node,
        avatar: {
          ...post.author?.node?.avatar,
          blurDataURL: authorAvatarBlur
        }
      }
    }
  };
}

export async function getSinglePost(
  slug: string
): Promise<PostType & { blurDataURL?: string }> {
  const resJson = await graphqlRequest(query, { slug });
  return enrichPostWithBlur(resJson.data.post);
}
