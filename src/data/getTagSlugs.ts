import graphqlRequest from './graphqlRequest';

export async function getTagSlugs(): Promise<{ slug: string }[] | null> {
  const query = `
    query getAllTagSlugs {
      tags(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const resJson = await graphqlRequest(query);
  if (!resJson?.data?.tags?.nodes) return null;
  return resJson.data.tags.nodes;
}
