import { useQuery } from '@tanstack/react-query';

import { User } from '../_types/User';

import getUser from '../_lib/getUser';

type Props = {
  username: string;
};
export default function useFetchUser({ username }: Props) {
  const { data, error } = useQuery<
    User,
    Error,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return {
    user: data,
    error,
  };
}
