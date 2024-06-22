import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import getPostFollowings from '../_lib/getPostFollowings';
import getPostRecommends from '../_lib/getPostRecommends';
import { Post } from '../_types/Post';

type TypeProps = {
  type: 'recommends' | 'follow';
};
export default function useFetchTypePosts({ type }: TypeProps) {
  const typeQueryFn = type === 'recommends' ? getPostRecommends : getPostFollowings;

  const typeQueryKey: [_1: string, _2: string] = type === 'recommends' ? ['posts', 'recommends'] : ['posts', 'followings'];

  const {
    data, fetchNextPage, hasNextPage, isFetching, isLoading,
  } = useInfiniteQuery<
    Post[],
    Error,
    InfiniteData<Post[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: typeQueryKey,
    queryFn: typeQueryFn,
    initialPageParam: 0,
    getNextPageParam: (lastpage) => lastpage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  return {
    infinitePosts: data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  };
}
