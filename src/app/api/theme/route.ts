import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { theme } = await request.json();

  // Tema değişikliğini işle
  const response = NextResponse.json({ success: true });

  // Theme cookie'sini ayarla
  response.cookies.set('theme', theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 31536000 // 1 yıl
  });

  return response;
}
