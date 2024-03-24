import { styled } from "styled-components";

import ImageLink from "../Post/ImageLink";

const FollowRecList = () => {
  return (
    <Container>
      <div>
        <ImageLink src={"/default.PNG"} id={"logo"} width={40} height={40} />
      </div>
      <div>
        <button type="button">팔로우</button>
      </div>
    </Container>
  );
};

export default FollowRecList;

const Container = styled.div`
  padding-block: 11px;
  display: flex;
  justify-content: space-between;

  > div:last-child {
    display: flex;
    width: 71px;
  }

  button {
    cursor: pointer;
    border: none;
    width: 100%;
    color: white;
    background: black;
    font-size: 14px;
    font-weight: 700;
    height: 32px;
    border-radius: 16px;
  }
`;
