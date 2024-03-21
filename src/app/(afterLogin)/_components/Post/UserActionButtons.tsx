import { styled } from "styled-components";

import { CommentIcon, LikeIcon, RetweetIcon } from "../../_constants/MenuIcons";

interface ButtonIconProps {
  icon: React.ReactNode;
  hoverColor: string[];
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, hoverColor }) => (
  <Button hoverColor={hoverColor}>{Icon}</Button>
);


//TODO : 중복 비슷한 스타일 코드 분리 작업하기 
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

interface ButtonProps {
  hoverColor: string[];
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 9999px;
  width: 34px;
  height: 34px;

  &:hover {
    background-color: ${(props) => props.hoverColor[0]};
    svg {
      fill: ${(props) => props.hoverColor[1]};
    }
  }

  svg {
    fill: rgb(83, 100, 113);
  }
`;
