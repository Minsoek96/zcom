import { useQuery } from '@tanstack/react-query';
import getTrends from '../_lib/getTrends';

import { Hashtag } from '../_types/Hashtag';

export default function useFetchTrends() {
  const { data, isLoading } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    retry: 3,
  });

  return {
    trends: data,
    isLoading,
  };
}
