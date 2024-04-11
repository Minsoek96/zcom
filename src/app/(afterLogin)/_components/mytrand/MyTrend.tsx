import { Hashtag } from '@/app/_types/Hashtag';
import { styled } from 'styled-components';

type MyTrendProps = {
    trend : Hashtag
}
export default function MyTrend({ trend }:MyTrendProps) {
  return (
    <ItemContainer>
      <p>{trend.title}</p>
      <p>
        {trend.count.toLocaleString()}
        {' '}
        posts
      </p>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  cursor: pointer;
  margin-block: 20px;
  p:first-child {
    font-weight: bold;
  }
  p:last-child {
    font-size: 12px;
    color: #536472;
    margin-top: 8px;
  }

  &:hover {
    opacity: 0.5;
  }
`;
