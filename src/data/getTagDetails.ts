import graphqlRequest from './graphqlRequest';

export async function getTagDetails(slug: string) {
  const query = `
    query getTagDetails($slug: ID!) {
      tag(id: $slug, idType: SLUG) {
        name
        slug
        description
        count
      }
    }
  `;
  const resJson = await graphqlRequest(query, { slug });
  return resJson.data.tag;
}
