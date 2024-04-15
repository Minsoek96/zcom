import Header from '@/app/_components/ui/Header';
import CommentForm from '@/app/(afterLogin)/_components/comment/Comment';
import PostDetail from '@/app/(afterLogin)/_components/post/post-detail/PostDetail';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import getPostDetail from '@/app/_lib/getPostDetail';

// TODO: 아래 commentList로 분리하기 모형 비슷하고 데이터만 변경
type PostDetailPageProps = {
  params: { id: string };
};
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['post', id],
    queryFn: getPostDetail,
  });

  const dyhydratedState = dehydrate(queryClient);
  return (
    <main>
      <HydrationBoundary state={dyhydratedState}>
        <Header mainText="게시하기" />
        <PostDetail id={id} />
        <CommentForm />
      </HydrationBoundary>
    </main>
  );
}
