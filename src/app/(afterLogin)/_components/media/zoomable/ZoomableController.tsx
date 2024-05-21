import { styled } from 'styled-components';
import { ZoomProps, ZoomType } from '@/app/_types/MediaType';
import { ZoomInIcon, ZoomOutIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import { zoomTypes } from '../data';

type ControllerProps = {
  type: ZoomType;
  onTypeChange: (item: ZoomProps) => void;
  scale: number;
  onScaleChange: (scale: number) => void;
};
export default function ZoomableController({
  type,
  onTypeChange,
  scale,
  onScaleChange,
}: ControllerProps) {
  return (
    <BottomContainer>
      <ZoomTypeWrrapper $type={type}>
        {zoomTypes.map((item) => (
          <div key={item.id} onClick={() => onTypeChange(item)}>
            {item.icon}
          </div>
        ))}
      </ZoomTypeWrrapper>
      <div>
        <ZoomOutIcon />
        <Slider
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={scale}
          onChange={(e) => onScaleChange(Number(e.target.value))}
        />
        <ZoomInIcon />
      </div>
    </BottomContainer>
  );
}

const Slider = styled.input`
  display: flex;
  flex-grow: 1;
  max-width: 250px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;

  > div {
    display: flex;
    flex-grow: 1;

    svg {
      fill: ${(props) => props.theme.colors.mainFont};
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const ZoomTypeWrrapper = styled.div<{ $type: ZoomType }>`
  justify-content: space-around;

  > div {
    display: flex;
  }

  > div:first-child {
    svg {
      fill: ${(props) => props.$type === 'origin' && props.theme.colors.mainColor};
    }
  }

  > div:nth-child(2) {
    svg {
      fill: ${(props) => props.$type === 'wide' && props.theme.colors.mainColor};
    }
  }

  > div:last-child {
    svg {
      fill: ${(props) => props.$type === 'square' && props.theme.colors.mainColor};
    }
  }
`;
