import { useQuery } from '@tanstack/react-query';

import getSearchResult from '../_lib/getSearchResult';

import { Post } from '../_types/Post';

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function useFetchSearchResult({ searchParams }: Props) {
  const { data } = useQuery<
    Post[],
    Error,
    Post[],
    [_1: string, _2: string, Props['searchParams']]
  >({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return {
    searchPosts: data,
  };
}
