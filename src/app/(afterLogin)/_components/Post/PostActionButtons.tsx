import { styled } from "styled-components";

import ButtonIcon from "@/app/_components/ui/ButtonIcon";
import PostBtn from "@/app/_components/ui/PostBtn";
import { PictureIcon } from "../../_constants/MenuIcons";

const PostActionButtons = () => {
    return (
        <Container>
          <ButtonIcon
            icon={<PictureIcon />}
            hoverColor={["rgba(29, 155, 240, 0.1)", ""]}
            isClick={true}
          />
          <PostBtn name={"게시하기"} onClick={() => console.log("d")} />
        </Container>
    );
};

export default PostActionButtons;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    fill: rgb(26, 140, 216);
    width: 25px;
    height: 25px;
  }

  button:last-child {
    width: 94px;
    height: 36px;
    font-size: 15px;
    background-color: none;
  }
`;