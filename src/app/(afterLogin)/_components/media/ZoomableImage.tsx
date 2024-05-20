import { useState, useRef, useCallback } from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import usePostStateStore from '@/app/_store/usePostStateStore';
import {
  RectangleIcon,
  SquareIcon,
  WideIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '../../_constants/MenuIcons';

interface ZoomableImageProps {
  src: string;
  alt: string;
}

function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const { setImagePreviews } = usePostStateStore();
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomBoxWidth = 500;
  const zoomBoxHight = 350;

  const handleSave = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    const scaleValue = scale;
    const sx = img.width / 2 - zoomBoxWidth / 2 / scaleValue;
    const sy = img.height / 2 - zoomBoxHight / 2 / scaleValue;
    const sWidth = zoomBoxWidth / scaleValue;
    const sHeight = zoomBoxHight / scaleValue;
    const dWidth = zoomBoxWidth;
    const dHeight = zoomBoxHight;

    canvas.width = zoomBoxWidth;
    canvas.height = zoomBoxHight;

    if (ctx) {
      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
      canvas.toBlob((blob) => {
        if (blob) {
          const fileUrl = URL.createObjectURL(blob);
          setImagePreviews([fileUrl]);
        }
      }, 'image/png');
    }
  }, [scale]);

  return (
    <Container>
      <ImageWrapper $scale={scale}>
        <Image ref={imageRef} src={src} alt={alt} width={550} height={500} />
        <CenterBox />
      </ImageWrapper>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Button onClick={handleSave}>이미지 저장</Button>
      <BottomContainer>
        <div>
          <RectangleIcon />
          <WideIcon />
          <SquareIcon />
        </div>
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

const Container = styled.div`
  display: flex;
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

const CenterBox = styled.div`
  position: absolute;
  width: 50rem;
  height: 35rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed red;
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
      fill: ${(props) => props.theme.colors.mainColor};
    }
  }

  > div:first-child {
    justify-content: space-around;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
