'use client';

import { SessionProvider } from 'next-auth/react';

type SessionProps = {
    children: React.ReactNode
}

export default function AuthSession({ children }: SessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
