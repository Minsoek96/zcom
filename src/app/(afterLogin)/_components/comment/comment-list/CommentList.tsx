'use client';

import useFetchComments from '@/app/_hooks/useFetchComments';

import Spinner from '@/app/_components/ui/Spinner';
import PostItem from '../../post/post-item/PostItem';

type CommentListProps = {
  id: string;
};
export default function CommentList({ id }: CommentListProps) {
  const { comments, isPost } = useFetchComments({ id });

  if (isPost) {
    return comments?.map((post) => <PostItem key={post.postId} post={post} />);
  }

  return <Spinner />;
}
