import { styled } from 'styled-components';

import useFetchTrends from '@/app/_hooks/useFetchTrends';

import Spinner from '@/app/_components/ui/Spinner';
import MyTrend from './MyTrend';

function MyTrendList() {
  const { trends, isLoading } = useFetchTrends();

  return (
    <Container>
      <div>
        <span>나를 위한 트렌드</span>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        trends?.map((trend) => <MyTrend trend={trend} key={trend.tagId} />)
      )}
    </Container>
  );
}

export default MyTrendList;

const Container = styled.div`
  font-size: 1rem;
  width: inherit;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 1.5rem;
  > div span {
    font-weight: 800;
    font-size: 2rem;
  }

  > div {
    padding-block: 1.2em;
    padding-inline: 1.6em;
  }

  > div:last-child {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;
