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
  font-weight: bold;
  > a {
    font-size: 1.6rem;
  }

  > p{
    font-weight: lighter;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secondFont};
    margin-top: .8rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.trendHover}
  }
`;
