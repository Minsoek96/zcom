import { styled } from 'styled-components';

interface ButtonIconProps {
  icon: React.ReactNode;
  hoverColor: string[];
  isClick?: boolean;
  number?: number;
  fill?: string;
}

export default function ButtonIcon({
  icon: Icon,
  hoverColor,
  isClick = false,
  number = 0,
  fill = 'white',
}: ButtonIconProps) {
  return (
    <Container $hoverColor={hoverColor}>
      <Button $hoverColor={hoverColor} $isClick={isClick || false} $fill={fill}>
        {Icon}
      </Button>
      <span>{number === 0 ? null : number}</span>
    </Container>
  );
}

interface ActionProps {
  $hoverColor: string[];
  $isClick?: boolean;
  $fill?: string;
}

const Container = styled.div<ActionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.$hoverColor[1]};
`;

const Button = styled.button.attrs({
  type: 'button',
})<ActionProps>`
  cursor: pointer;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 9999px;
  background-color: inherit;

  svg {
    fill: ${(props) => (props.$isClick ? props.$hoverColor[1] : props.$fill)};
  }

  &:hover {
    background-color: ${(props) => props.$hoverColor[0]};
    svg {
      fill: ${(props) => props.$hoverColor[1]};
    }
    transition: background-color 0.2s ease;
  }
`;
