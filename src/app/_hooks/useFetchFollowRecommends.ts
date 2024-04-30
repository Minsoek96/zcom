import { useQuery } from '@tanstack/react-query';

import getFollowRec from '../_lib/getFollowRec';

import { User } from '../_types/User';

export default function useFetchFollowRecommends() {
  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRec,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return {
    recommends: data,
  };
}
