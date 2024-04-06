'use client';

import { useQuery } from '@tanstack/react-query';

import { Post } from '@/app/_types/Post';

import getPostFollowings from '@/app/_lib/getPostFollowings';

import PostItem from './PostItem';

export default function FollowingPostList() {
  const { data } = useQuery<Post[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getPostFollowings,
  });

  return (
    data?.map((post) => <PostItem key={post.postId} post={post} />)
  );
}
