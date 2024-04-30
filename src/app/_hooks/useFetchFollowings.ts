import { useQuery } from '@tanstack/react-query';

import getPostFollowings from '../_lib/getPostFollowings';

import { Post } from '../_types/Post';

export default function useFetchFollowings() {
  const { data } = useQuery<Post[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getPostFollowings,
  });

  return {
    followings: data,
  };
}
