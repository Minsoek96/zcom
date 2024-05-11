import useThemeStorage from '@/app/_hooks/useThemeStorage';

import { FontDataProps } from '@/app/_types/FontType';

import { styled } from 'styled-components';

type FontMarkerProps = {
  item: FontDataProps;
};

export default function FontMarker({ item }: FontMarkerProps) {
  const { font, offset } = item;
  const { handleChangeFont, fontOption } = useThemeStorage();

  const isSelected = offset <= fontOption.offset;

  return (
    <FontItem>
      <Marker
        onClick={() => handleChangeFont(font, offset)}
        $offset={offset}
        $isMarker={isSelected}
      >
        <div>
          <span>{font}</span>
        </div>
      </Marker>
    </FontItem>
  );
}

type MarkerProps = {
  $offset: number;
  $isMarker: boolean;
};

const FontItem = styled.div`
  position: relative;
`;

const Marker = styled.div<MarkerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1.4rem;
  left: ${(props) => props.$offset}%;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  transform: translateX(-50%);
  transition: all 0.5s ease-in;
  cursor: pointer;

  > div {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${(props) => (props.$isMarker ? 'rgb(249, 24, 128)' : 'rgb(252, 140, 192)')};
  }

  span {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverEffect};

    span {
      display: flex;
    }
  }
`;
