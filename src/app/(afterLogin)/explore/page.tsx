"use client";
import { styled } from "styled-components";
import SearchForm from "../_components/SearchForm";
import MyTrandList from "../_components/mytrand/MyTrandList";

const Explore = () => {
  return (
    <Container>
      <div>
        <SearchForm />
      </div>
      <TrandWrapper>
        <span>나를 위한 트렌드</span>
        <MyTrandList />
      </TrandWrapper>
    </Container>
  );
}

export default Explore

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
  > span {
    font-size: 20px;
    font-weight: 800;
  }
`;
