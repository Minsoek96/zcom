import type { Metadata } from 'next';

// import './globals.css';

import Providers from '@/lib/Providers';
import GlobalProvider from '@/lib/GlobalProvider';
import MSWComponent from './_components/MSWComponent';
import AuthSession from './_components/AuthSession';

export const metadata: Metadata = {
  title: 'X_Clone',
  description: '백민석의 X사이트 클론 웹사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalProvider />
          <MSWComponent />
          <AuthSession>{children}</AuthSession>
        </Providers>
      </body>
    </html>
  );
}
