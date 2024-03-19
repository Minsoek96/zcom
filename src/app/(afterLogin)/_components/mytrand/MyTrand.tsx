import styled from "styled-components";

import MyTrandList from "./MyTrandList";

const MyTrand = () => {
  return (
    <Container>
      <h3>나를 위한 트렌드</h3>
      <MyTrandList></MyTrandList>
    </Container>
  );
};

export default MyTrand;

const Container = styled.div`
  background-color: RGB(247, 249, 249);
  border-radius: 15px;
  padding: 12px;
`;
