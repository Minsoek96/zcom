import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post } from '../_types/Post';
import getUserPosts from '../_lib/getUserPosts';

type Props = {
    username: string
}
export default function useFetchUserPosts({ username }:Props) {
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
  const isUser = queryClient.getQueryData(['users', username]);
  return {
    userPosts: data,
    isUser,
  };
}
