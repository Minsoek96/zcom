import { Suspense } from 'react';

import Container from '@/app/(afterLogin)/home/_style/Container';

import Spinner from '@/app/_components/ui/Spinner';
import Tab from '../_components/tab/Tab';
import PostForm from '../_components/post/form/PostForm';
import AsyncTabContent from '../_components/post/AsyncTabContent';

export default async function Home() {
  return (
    <Container>
      <Tab />
      <PostForm />
      <Suspense fallback={<Spinner />}>
        <AsyncTabContent />
      </Suspense>
    </Container>
  );
}
