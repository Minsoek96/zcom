import { usePathname } from 'next/navigation';

import { styled } from 'styled-components';

import SearchForm from '../../search/SearchForm';
import MyTrendList from '../../mytrand/MyTrendList';
import FollowRecList from '../../mytrand/FollowRecList';

function RightSideSection() {
  const path = usePathname();
  const isPathExplore = path !== '/explore';

  return (
    <Container>
      { isPathExplore
        && (
          <>
            <SearchForm />
            <MyTrendList />
          </>
        )}
      <FollowRecList />
    </Container>
  );
}

export default RightSideSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;

  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
