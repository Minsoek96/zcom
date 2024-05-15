'use client';

import getPostDetail from '@/app/_lib/getPostDetail';
import { Post } from '@/app/_types/Post';

import { useQuery } from '@tanstack/react-query';
import PostItem from '../post-item/PostItem';
import NotFoundPost from '../NotFoundPost';

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

  if (error || !data) {
    return (
      <NotFoundPost />
    );
  }

  return <PostItem post={data} isPhoto={isPhoto} />;
}