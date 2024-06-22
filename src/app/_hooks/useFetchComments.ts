import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post } from '../_types/Post';
import getComments from '../_lib/getComments';

type Props = {
    id: string
}

export default function useFetchComments({ id }:Props) {
  const queryClient = useQueryClient();
  const isPost = queryClient.getQueryData(['posts', id]);
  const { data, isLoading } = useQuery<
      Post[],
      Error,
      Post[],
      [_1: string, _2: string, _3: string]
    >({
      queryKey: ['posts', id, 'comments'],
      queryFn: getComments,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });

  return {
    comments: data,
    isPost,
    isLoading,
  };
}
