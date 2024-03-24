import styled from "styled-components";

import MyTrandList from "./MyTrandList";
import { usePathname } from "next/navigation";
import SearchForm from "../SearchForm";

const MyTrand = () => {
  const path = usePathname();

  if (path === "/explore") {
    return null;
  }

  return (
    <Container>
      <SearchForm />
      <TrandWrapper>
        <span>나를 위한 트렌드</span>
        <MyTrandList></MyTrandList>
      </TrandWrapper>
    </Container>
  );
};

export default MyTrand;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
`;

const TrandWrapper = styled.div`
  background-color: RGB(247, 249, 249);
  border-radius: 15px;
  padding-block: 11px;
  padding-inline: 15px;

  > span {
    font-weight: 800;
    font-size: 19px;
  }
`;
