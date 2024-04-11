import { usePathname } from 'next/navigation';

import { styled } from 'styled-components';

import SearchForm from '../../search/SearchForm';
import MyTrendList from '../../mytrand/MyTrendList';
import FollowRec from '../../mytrand/FollowRec';

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
      <FollowRec />
    </Container>
  );
}

export default RightSideSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`;
