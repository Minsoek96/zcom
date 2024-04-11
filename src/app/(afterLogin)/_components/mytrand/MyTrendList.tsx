import { useQuery } from '@tanstack/react-query';

import { Hashtag } from '@/app/_types/Hashtag';

import getTrends from '@/app/_lib/getTrends';

import { styled } from 'styled-components';

import MyTrend from './MyTrend';

function MyTrendList() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  return (
    <Container>
      <span>나를 위한 트렌드</span>
      {data?.map((trend) => (
        <MyTrend trend={trend} key={trend.tagId} />
      ))}
    </Container>
  );
}

export default MyTrendList;

const Container = styled.div`
  width: inherit;
  background-color: RGB(247, 249, 249);
  border-radius: 15px;
  padding-block: 11px;
  padding-inline: 15px;
  > span {
    font-weight: 800;
    font-size: 19px;
  }
`;
