import { redirect } from 'next/navigation';

import { auth } from '@/auth';

import Main from '@/app/(beforeLogin)/_component/Main';

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect('/home');
    return null;
  }

  return (
    <Main />
  );
}
