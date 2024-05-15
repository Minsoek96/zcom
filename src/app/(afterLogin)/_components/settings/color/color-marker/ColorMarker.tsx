import RadioCheck from '@/app/_components/ui/CheckBox';
import { CircleIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

import useThemeStorage from '@/app/_hooks/useThemeStorage';

import { ColorDataProps } from '@/app/_types/ColorType';
import { styled } from 'styled-components';

type ColorMarkerProps = {
    theme: ColorDataProps;
}
export default function ColorMarker({ theme }:ColorMarkerProps) {
  const { color, handleChangeColor } = useThemeStorage();
  const { mainColor } = color;

  return (
    <ColorContainer $circleColor={theme.mainColor} key={theme.id}>
      <CircleIcon />
      <RadioCheck
        checked={mainColor === theme.mainColor}
        id={theme.id}
        onChange={() => {
          handleChangeColor(theme.mainColor, theme.subColor);
        }}
      />
    </ColorContainer>
  );
}

type SettingProps = {
    $circleColor: string;
  };

const ColorContainer = styled.div<SettingProps>`
    svg {
      fill: ${(props) => props.$circleColor};
    }
  `;
