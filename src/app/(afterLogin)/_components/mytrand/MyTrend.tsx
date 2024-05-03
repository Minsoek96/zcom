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
  margin-block: 2.0rem;
  font-weight: bold;
  > a {
    font-size: 1.6rem;
  }

  > p{
    font-weight: lighter;
    font-size: 1.2rem;
    color: #536472;
    margin-top: .8rem;
  }

  &:hover {
    opacity: 0.5;
  }
`;
