import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import getPostRecommends from '@/app/_lib/getPostRecommends';

import Container from '@/app/(afterLogin)/home/_style/Container';
import Tab from '../_components/tab/Tab';
import PostForm from '../_components/post/form/PostForm';
import PostFeedTabSwitcher from '../_components/post/PostFeedTabSwitcher';

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
        <PostFeedTabSwitcher />
      </HydrationBoundary>
    </Container>
  );
}
