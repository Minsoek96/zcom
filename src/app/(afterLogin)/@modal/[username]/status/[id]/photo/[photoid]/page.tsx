import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import getPostDetail from '@/app/_lib/getPostDetail';
import getComments from '@/app/_lib/getComments';
import PostDetail from '@/app/(afterLogin)/_components/post/post-detail/PostDetail';
import CommentForm from '@/app/(afterLogin)/_components/comment/form/CommentForm';
import CommentList from '@/app/(afterLogin)/_components/comment/comment-list/CommentList';
import ImageSlider from '@/app/(afterLogin)/_components/photo/ImageSlider';
import { Container, LeftSection, RightSection } from './_style/style';

type PhotoViewProps = {
  params: { id: string; photoid: string };
};
export default async function PhotoView({ params }: PhotoViewProps) {
  const { id, photoid } = params;
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

  // TODO: CommentForm 활용 적절한지 검토
  return (
    <Container>
      <LeftSection>
        <ImageSlider photoid={photoid} id={id} />
      </LeftSection>
      <HydrationBoundary state={dyhydratedState}>
        <RightSection>
          <PostDetail id={id} isPhoto={false} />
          <CommentForm id={id} />
          <CommentList id={id} />
        </RightSection>
      </HydrationBoundary>
    </Container>
  );
}
