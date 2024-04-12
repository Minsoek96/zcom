'use client';

import getUserPosts from '@/app/_lib/getUserPosts';

import { Post } from '@/app/_types/Post';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import PostItem from '../post-detail/PostItem';

type UserPostListProps = {
  username: string;
};
export default function UserPostList({ username }: UserPostListProps) {
  const { data } = useQuery<
    Post[],
    Error,
    Post[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]);

  if (user) {
    return data?.map((post) => <PostItem key={post.postId} post={post} />);
  }
  return null;
}
