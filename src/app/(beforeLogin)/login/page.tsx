'use client';

import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import Main from '../_component/Main';

function Login() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/i/flow/login');
  }, []);

  return <Main />;
}

export default Login;
