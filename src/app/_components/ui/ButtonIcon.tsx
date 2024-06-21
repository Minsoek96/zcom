import { styled } from 'styled-components';

interface ButtonIconProps {
  icon: React.ReactNode;
  hoverColor: string[];
  isClick?: boolean;
  onClick?: () => void;
  number?: number;
  fill?: string;
}

export default function ButtonIcon({
  icon: Icon,
  hoverColor,
  isClick = false,
  onClick = () => {},
  number = 0,
  fill = 'white',
}: ButtonIconProps) {
  const displayNumber = number !== 0 ? number : null;
  return (
    <Container $hoverColor={hoverColor}>
      <Button
        $hoverColor={hoverColor}
        $isClick={isClick || false}
        $fill={fill}
        onClick={onClick}
      >
        {Icon}
      </Button>
      {displayNumber && <span>{displayNumber}</span>}
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
  font-size: 1.4rem;
  color: ${(props) => props.$hoverColor[1]};

  &:hover {
    svg {
      fill: ${(props) => props.$hoverColor[1]};
    }
  }
`;

const Button = styled.button.attrs({
  type: 'button', role: 'button',
})<ActionProps>`
  cursor: pointer;
  width: 3.4rem;
  height: 3.4rem;
  border: none;
  border-radius: 9999px;
  background-color: inherit;

  svg {
    fill: ${(props) => (props.$isClick ? props.$hoverColor[1] : props.$fill)};
  }

  &:hover {
    background-color: ${(props) => props.$hoverColor[0]};
    transition: background-color 0.2s ease;
  }
`;
