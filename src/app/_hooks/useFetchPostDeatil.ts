import { useQuery } from '@tanstack/react-query';
import { Post } from '../_types/Post';
import getPostDetail from '../_lib/getPostDetail';

type usePostDeatilProps = {
    id: string
}
export default function useFetchPostDetail({ id } : usePostDeatilProps) {
  const { data } = useQuery<Post, Error, Post, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getPostDetail,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  return {
    post: data,
  };
}
