'use client';

import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

import { useEffect } from 'react';
import Main from '../_component/Main';

function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    router.replace('/i/flow/login');
  });

  if (session?.user) {
    router.replace('/home');
    return null;
  }

  return <Main />;
}

export default Login;
