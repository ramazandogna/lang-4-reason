import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { theme } = await request.json();

  const response = NextResponse.json({ success: true });

  // 1 yıl boyunca geçerli olacak cookie
  response.cookies.set('theme', theme, {
    maxAge: 60 * 60 * 24 * 365 // 1 yıl
  });

  return response;
}
