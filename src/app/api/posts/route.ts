import getAllPosts from '@/data/getAllPosts';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get('cursor') || '';
  const category = searchParams.get('category') || 'destinations'; // default
  const data = await getAllPosts(
    cursor,
    { key: 'categoryName', value: category },
    6
  );
  return Response.json(data);
}
