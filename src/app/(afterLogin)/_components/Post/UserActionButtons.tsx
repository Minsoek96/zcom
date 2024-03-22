import { styled } from "styled-components";

import ButtonIcon from "@/app/_components/ui/ButtonIcon";

import { CommentIcon, LikeIcon, RetweetIcon } from "../../_constants/MenuIcons";

const UserActionButtons: React.FC = () => {
  return (
    <Container>
      <ButtonIcon
        icon={<CommentIcon />}
        hoverColor={["rgba(29, 155, 240, 0.1)", "rgba(29, 155, 240)"]}
      />
      <ButtonIcon
        icon={<RetweetIcon />}
        hoverColor={["rgba(0, 186, 124, 0.2)", "rgba(0, 186, 124)"]}
      />
      <ButtonIcon
        icon={<LikeIcon />}
        hoverColor={["rgba(224, 36, 94, 0.2)", "rgba(224, 36, 94)"]}
      />
    </Container>
  );
};

export default UserActionButtons;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding-top: 12px;
`;