import { useFontStore } from '@/app/_store/useFontStore';
import { FontData, FontType } from '@/app/_types/FontType';
import { styled } from 'styled-components';

type FontMarkerProps = {
  item: FontData;
};

export default function FontMarker({ item }: FontMarkerProps) {
  const { font, offset } = item;
  const { setSelectedOffset, setFontSize, selectedOffset } = useFontStore();

  const isSelected = offset <= selectedOffset;

  const handleChangeFont = (type: FontType, targetOffset: number) => {
    setFontSize(type);
    setSelectedOffset(targetOffset);
  };

  return (
    <FontItem>
      <Marker
        onClick={() => handleChangeFont(font, offset)}
        $offset={offset}
        $isMarker={isSelected}
      >
        {font}
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
  position: absolute;
  top: -5px;
  left: ${(props) => props.$offset}%;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${(props) => (props.$isMarker ? 'rgb(249, 24, 128)' : 'rgb(252, 140, 192)')};
  border-radius: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
