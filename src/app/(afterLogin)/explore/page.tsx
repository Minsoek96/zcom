'use client';

import { styled } from 'styled-components';

import SearchForm from '../_components/search/SearchForm';
import MyTrendList from '../_components/mytrand/MyTrendList';

function Explore() {
  return (
    <Container>
      <div>
        <SearchForm />
      </div>
      <TrandWrapper>
        <MyTrendList />
      </TrandWrapper>
    </Container>
  );
}

export default Explore;

const Container = styled.div`
  width: inherit;

  > div:first-child {
    font-size: 1rem;
    padding-inline: 1.5em;
    padding-block: 1.5em;
    width: 57rem;
    padding-bottom: 0;
  }
`;

const TrandWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  width: 100%;
  > div {
    border: none;
  }
`;
