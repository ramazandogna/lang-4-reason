import { PostResponse } from '../types/posts';
import graphqlRequest from './graphqlRequest';
import { getPlaiceholder } from 'plaiceholder';

async function enrichPostWithBlur(post: any) {
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
  return { ...post, blurDataURL };
}

export default async function getAllPosts(
  endCursor = '',
  taxonomy: { key: string; value: string } | null = null,
  howMany = 5,
  search: string | null = null
) {
  const query = `
    query getAllPosts(
      $endCursor: String
      $search: String
      $categoryName: String
      $tag: String
    ) {
      posts(
        after: $endCursor
        first: ${howMany}
        where: {
          orderby: { field: DATE, order: DESC }
          search: $search
          categoryName: $categoryName
          tag: $tag
        }
      ) {
        nodes {
          date
          slug
          excerpt
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
          databaseId
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  height
                  width
                }
              }
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          title
        }
        pageInfo {
          endCursor
          hasPreviousPage
          hasNextPage
          startCursor
        }
      }
    }
  `;

  const variables: {
    endCursor?: string;
    search?: string | null;
    categoryName?: string;
    tag?: string;
  } = {
    endCursor,
    search
  };

  if (taxonomy?.key === 'categoryName') {
    variables.categoryName = taxonomy.value;
  }

  if (taxonomy?.key === 'tag') {
    variables.tag = taxonomy.value;
  }

  const resJson = await graphqlRequest(query, variables);

  // Hata kontrolü
  if (!resJson?.data?.posts) {
    console.error('❌ GraphQL response error in getAllPosts:', resJson);
    return {
      nodes: [],
      pageInfo: {
        endCursor: '',
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: ''
      }
    };
  }

  // Her post için blurDataURL ekle
  const nodes = await Promise.all(
    resJson.data.posts.nodes.map(enrichPostWithBlur)
  );

  return {
    ...resJson.data.posts,
    nodes
  } as PostResponse;
}
