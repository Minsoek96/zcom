'use client';

import { useQuery } from '@tanstack/react-query';

import { Post } from '@/app/_types/Post';

import getPostRecommends from '@/app/_lib/getPostRecommends';

import PostItem from './PostItem';

export default function PostViewList() {
  const { data } = useQuery<Post[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });

  return data?.map((post) => <PostItem key={post.postId} post={post} />);
}
