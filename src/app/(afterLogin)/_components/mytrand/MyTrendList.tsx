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
  font-size: 1rem;
  width: inherit;
  background-color: RGB(247, 249, 249);
  border-radius: 1.5rem;
  padding-block: 1.1em;
  padding-inline: 1.5em;
  > span {
    font-weight: 800;
    font-size: 1.9rem;
  }
`;
