import { useState, useRef, useCallback } from 'react';

import styled from 'styled-components';

import usePostStateStore from '@/app/_store/usePostStateStore';

interface ZoomableImageProps {
  src: string;
  alt: string;
}

function ZoomableImage({ src, alt }:ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const { setImagePreviews } = usePostStateStore();
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomBoxX = 500;
  const zoomBoxY = 300;

  const handleSave = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    const scaleValue = scale;
    const sx = (img.width / 2) - (zoomBoxX / 2 / scaleValue);
    const sy = (img.height / 2) - (zoomBoxY / 2 / scaleValue);
    const sWidth = zoomBoxX / scaleValue;
    const sHeight = zoomBoxY / scaleValue;
    const dWidth = zoomBoxX;
    const dHeight = zoomBoxY;

    canvas.width = zoomBoxX;
    canvas.height = zoomBoxY;

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
      <ImageWrapper>
        <Image ref={imageRef} src={src} alt={alt} scale={scale} />
        <CenterBox />
      </ImageWrapper>
      <Slider
        type="range"
        min="1"
        max="5"
        step="0.1"
        value={scale}
        onChange={(e) => setScale(Number(e.target.value))}
      />
      <Button onClick={handleSave}>이미지 저장</Button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
}

export default ZoomableImage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 60rem;
  height: 40rem;
  overflow: hidden;
  border: 2px solid #333;
`;

const Image = styled.img<{ scale: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${(props) => props.scale});
  transform-origin: center;
`;

const CenterBox = styled.div`
  position: absolute;
  width: 50rem;
  height: 30rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed red;
  pointer-events: none;
`;

const Slider = styled.input`
  margin-top: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
`;
