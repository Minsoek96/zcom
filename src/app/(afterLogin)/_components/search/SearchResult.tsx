'use client';

import useFetchSearchResult from '@/app/_hooks/useFetchSearchResult';

import PostItem from '../post/post-item/PostItem';

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
export default function SearchResult({ searchParams }: Props) {
  const { searchPosts } = useFetchSearchResult({ searchParams });

  return searchPosts?.map((post) => <PostItem key={post.postId} post={post} />);
}
