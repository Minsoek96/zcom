'use client';

import getComments from '@/app/_lib/getComments';
import { Post } from '@/app/_types/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import PostItem from '../../post/post-item/PostItem';

type CommentListProps = {
  id: string;
};
export default function CommentList({ id }: CommentListProps) {
  const queryClient = useQueryClient();
  const isPost = queryClient.getQueryData(['posts', id]);
  const { data } = useQuery<
    Post[],
    Error,
    Post[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (isPost) {
    return data?.map((post) => <PostItem key={post.postId} post={post} />);
  }

  return null;
}
