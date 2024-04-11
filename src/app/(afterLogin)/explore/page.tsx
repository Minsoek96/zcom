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

  > div {
    padding-inline: 15px;
    padding-block: 15px;
  }

  > div:first-child {
    width: 570px;
    padding-bottom: 0;
  }
`;

const TrandWrapper = styled.div`
  border-top: 1px solid #eff3f4;
  > div {
    background-color: white;
  }
`;
