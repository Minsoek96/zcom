'use client';

import getPostDetail from '@/app/_lib/getPostDetail';
import { Post } from '@/app/_types/Post';

import { useQuery } from '@tanstack/react-query';
import PostItem from '../post-item/PostItem';

type UserPostListProps = {
  id: string;
  isPhoto: boolean;
};
export default function PostDetail({ id, isPhoto }: UserPostListProps) {
  const { data, error } = useQuery<
    Post,
    Error,
    Post,
    [_1: string, _2: string]
  >({
    queryKey: ['posts', id],
    queryFn: getPostDetail,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (error) {
    return (
      <div>게시글을 찾을 수 없습니다.</div>
    );
  }

  if (!data) {
    return null;
  }

  return <PostItem post={data} isPhoto={isPhoto} />;
}
