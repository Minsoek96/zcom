import { useState, useRef, useCallback } from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import useMediaStateStore from '@/app/_store/useMediaStateStore';
import { ZoomInIcon, ZoomOutIcon } from '../../_constants/MenuIcons';
import zoomTypeData, {
  ZoomInitalState,
  ZoomProps,
  ZoomType,
} from './zoomTypeData';

type ZoomableImageProps = {
  src: string;
  alt: string;
  isSelectedMedia: boolean;
};

function ZoomableImage({ src, alt, isSelectedMedia }: ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const [zoomType, setZoomType] = useState<ZoomProps>(ZoomInitalState);
  const { setUpdateImage } = useMediaStateStore();
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomBoxWidth = zoomType.width * 10;
  const zoomBoxHeight = zoomType.height * 10;

  const handleSave = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    const scaleValue = scale;
    const sx = img.width / 2 - zoomBoxWidth / 2 / scaleValue;
    const sy = img.height / 2 - zoomBoxHeight / 2 / scaleValue;
    const sWidth = zoomBoxWidth / scaleValue;
    const sHeight = zoomBoxHeight / scaleValue;
    const dWidth = zoomBoxWidth;
    const dHeight = zoomBoxHeight;

    canvas.width = zoomBoxWidth;
    canvas.height = zoomBoxHeight;

    if (ctx) {
      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
      canvas.toBlob((blob) => {
        if (blob) {
          const fileUrl = URL.createObjectURL(blob);
          setUpdateImage(src, fileUrl);
        }
      }, 'image/png');
    }
  }, [scale]);

  return (
    <Container $isSelected={isSelectedMedia}>
      <ImageWrapper $scale={scale}>
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          width={550}
          height={500}
          onLoadingComplete={(img) => {
            img.setAttribute(
              'style',
              `width: ${img.naturalWidth}px; height: ${img.naturalHeight}px;`,
            );
          }}
        />
        <CenterBox $zoomWidth={zoomType.width} $zoomHeight={zoomType.height} />
      </ImageWrapper>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Button onClick={handleSave}>이미지 저장</Button>
      <BottomContainer>
        <ZoomTypeWrrapper $type={zoomType.type}>
          {zoomTypeData.map((item) => (
            <div key={item.id} onClick={() => setZoomType(item)}>
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
            onChange={(e) => setScale(Number(e.target.value))}
          />
          <ZoomInIcon />
        </div>
      </BottomContainer>
    </Container>
  );
}

export default ZoomableImage;

const Container = styled.div<{ $isSelected: boolean }>`
  display: ${(props) => (props.$isSelected ? 'display' : 'none')};
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div<{ $scale: number }>`
  display: flex;
  position: relative;
  width: 60rem;
  height: 62rem;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${(props) => props.$scale});
    transform-origin: center;
    object-fit: contain;
  }
`;

type ZoomSize = {
  $zoomWidth: number;
  $zoomHeight: number;
};
const CenterBox = styled.div<ZoomSize>`
  position: absolute;
  width: ${(props) => props.$zoomWidth}rem;
  height: ${(props) => props.$zoomHeight}rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px dashed ${(props) => props.theme.colors.mainColor};
  pointer-events: none;
`;

const Slider = styled.input`
  display: flex;
  flex-grow: 1;
  max-width: 250px;
`;

const Button = styled.button`
  margin-top: 10px;
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
