import { styled } from "styled-components";

interface ButtonIconProps {
  icon: React.ReactNode;
  hoverColor: string[];
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, hoverColor }) => (
  <Button hoverColor={hoverColor}>{Icon}</Button>
);

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
    transition: background-color 0.2s ease;
  }

  svg {
    fill: rgb(83, 100, 113);
  }
`;

export default ButtonIcon;
