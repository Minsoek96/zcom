import { Hashtag } from '@/app/_types/Hashtag';

import Link from 'next/link';

import { styled } from 'styled-components';

type MyTrendProps = {
  trend: Hashtag;
};
export default function MyTrend({ trend }: MyTrendProps) {
  return (
    <ItemContainer>
      <Link href={`/search?q=${trend.title}`}>
        <p>{trend.title}</p>
      </Link>
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
  font-weight: bold;
  > p{
    font-weight: lighter;
    font-size: 12px;
    color: #536472;
    margin-top: 8px;
  }

  &:hover {
    opacity: 0.5;
  }
`;
