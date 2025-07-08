import graphqlRequest from './graphqlRequest';

export async function getAuthorDetails(slug: string) {
  const query = `
    query getAuthorDetails($slug: ID!) {
      user(id: $slug, idType: SLUG) {
        name
        slug
        description
        avatar {
          url
        }
        posts(first: 100) {
          nodes {
            title
            slug
          }
        }
      }
    }
  `;
  const resJson = await graphqlRequest(query, { slug });
  return resJson.data.user;
}
