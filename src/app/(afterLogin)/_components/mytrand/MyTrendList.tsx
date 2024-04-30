import { styled } from 'styled-components';

import useFetchTrends from '@/app/_hooks/useFetchTrends';

import MyTrend from './MyTrend';

function MyTrendList() {
  const { trends } = useFetchTrends();

  return (
    <Container>
      <span>나를 위한 트렌드</span>
      {trends?.map((trend) => (
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
