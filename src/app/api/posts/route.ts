import getAllPosts from '@/data/getAllPosts';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get('cursor') || '';
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');
  const author = searchParams.get('author');

  let taxonomy = null;
  if (category) taxonomy = { key: 'categoryName', value: category };
  else if (tag) taxonomy = { key: 'tag', value: tag };
  else if (author) taxonomy = { key: 'author', value: author };

  const data = await getAllPosts(cursor, taxonomy, 6);
  return Response.json(data);
}
