import { cookies } from 'next/headers';

export async function getInitialTheme() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  return theme === 'dark' ? 'dark' : 'light';
}
