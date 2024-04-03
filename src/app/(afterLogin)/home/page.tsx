import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import getPostRecommends from '@/app/_lib/getPostRecommends';

import Container from '@/app/_style/Container';
import Tab from '../_components/tab/Tab';
import PostForm from '../_components/Post/PostForm';
import PostViewList from '../_components/Post/PostViewList';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Container>
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <PostForm />
        <PostViewList />
      </HydrationBoundary>
    </Container>
  );
}
