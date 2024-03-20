import { styled } from "styled-components";
import { PictureIcon } from "../../_constants/MenuIcons";
import PostBtn from "../SideBar/PostBtn";

const ActionButtons = () => {
  return (
    <Container>
      <div>
        <PictureIcon />
      </div>
      <div>
        <PostBtn name={"게시하기"} onClick={() => console.log("d")} />
      </div>
    </Container>
  );
};

export default ActionButtons;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > div:first-child {
    background-color: white;
    border: none;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      fill: rgb(26, 140, 216);
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: rgba(29, 155, 240, 0.1);
      border-radius: 9999px;

      transition: background-color 0.2s ease;
    }
  }

  > div:last-child {
    button {
      width: 94px;
      height: 36px;
      font-size: 15px;
      background-color: none;
    }
  }
`;
