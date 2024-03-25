import { styled } from "styled-components";
import FollowRecList from "./FollowRecList";

const FollowRec = () => {
  return (
    <Container>
      <span>팔로우 추천</span>
      <FollowRecList />
      <FollowRecList />
      <FollowRecList />
    </Container>
  );
};

export default FollowRec;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: RGB(247, 249, 249);
  margin-block: 15px;
  padding-block: 11px;
  > * {
    padding-inline: 15px;
  }

  > span {
    font-weight: 800;
    font-size: 19px;
    margin-bottom: 15px;
  }
`;
