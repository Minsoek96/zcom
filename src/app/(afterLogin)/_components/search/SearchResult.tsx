'use client';

import { useQuery } from '@tanstack/react-query';

import { Post } from '@/app/_types/Post';
import getSearchResult from '@/app/_lib/getSearchResult';
import PostItem from '../post/post-item/PostItem';

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}
export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<Post[], Error, Post[], [_1: string, _2: string, Props['searchParams']]>({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => (
    <PostItem key={post.postId} post={post} />
  ));
}
