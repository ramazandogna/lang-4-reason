import graphqlRequest from './graphqlRequest';

export async function getAuthorSlugs(): Promise<{ slug: string }[] | null> {
  const query = `
    query getAllAuthorSlugs {
      users(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const resJson = await graphqlRequest(query);
  if (!resJson?.data?.users?.nodes) return null;
  return resJson.data.users.nodes;
}
