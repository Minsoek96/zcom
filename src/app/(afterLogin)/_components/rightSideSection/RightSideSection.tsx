import { usePathname } from "next/navigation";

import { styled } from "styled-components";

import SearchForm from "../SearchForm";
import MyTrandList from "../mytrand/MyTrandList";
import FollowRec from "../mytrand/FollowRec";

const RightSideSection = () => {
  const path = usePathname();
  const isPathExplore = path !== '/explore'

  return (
    <Container>
      { isPathExplore &&
        <>
          <SearchForm />
          <MyTrandList />
        </>
      }
      <FollowRec />
    </Container>
  );
};

export default RightSideSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`;
