import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import Header from '@/app/_components/ui/Header';
import CommentForm from '@/app/(afterLogin)/_components/comment/form/CommentForm';
import PostDetail from '@/app/(afterLogin)/_components/post/post-detail/PostDetail';

import getPostDetail from '@/app/_lib/getPostDetail';
import getComments from '@/app/_lib/getComments';
import CommentList from '@/app/(afterLogin)/_components/comment/comment-list/CommentList';

// TODO: 아래 commentList로 분리하기 모형 비슷하고 데이터만 변경
type PostDetailPageProps = {
  params: { id: string };
};
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getPostDetail,
  });

  await queryClient.prefetchQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
  });

  const dyhydratedState = dehydrate(queryClient);
  return (
    <main>
      <HydrationBoundary state={dyhydratedState}>
        <Header mainText="게시하기" />
        <PostDetail id={id} isPhoto />
        <CommentForm id={id} />
        <CommentList id={id} />
      </HydrationBoundary>
    </main>
  );
}
