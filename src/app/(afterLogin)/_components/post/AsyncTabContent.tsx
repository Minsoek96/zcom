import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import getPostRecommends from '@/app/_lib/getFollowRec';

import PostFeedTabSwitcher from './PostFeedTabSwitcher';

export default async function AsyncTabContent() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <PostFeedTabSwitcher />
    </HydrationBoundary>
  );
}
