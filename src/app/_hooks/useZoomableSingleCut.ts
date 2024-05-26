import { useCallback, useRef } from 'react';

import useMediaStateStore from '@/app/_store/useMediaStateStore';

import { ZoomProps } from '@/app/_types/MediaType';

const useZoomableSingleCut = (src: string, scale: number, zoomType: ZoomProps) => {
  const { setUpdateImage } = useMediaStateStore();
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSave = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    if (ctx && img) {
      drawImageToCanvas(ctx, img, scale, zoomType);
      saveCanvasToBlob(canvas, (blob) => {
        if (blob) {
          const fileUrl = URL.createObjectURL(blob);
          setUpdateImage(src, fileUrl);
        }
      });
    }
  }, [scale, zoomType, src, setUpdateImage]);

  return { imageRef, canvasRef, handleSave };
};

const drawImageToCanvas = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  scale: number,
  zoomType: ZoomProps,
) => {
  const containerWidth = img.clientWidth;
  const containerHeight = img.clientHeight;

  const zoomBoxWidth = zoomType.width * 10;
  const zoomBoxHeight = zoomType.height * 10;

  // 원본 이미지 크기
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  // 이미지 비율 계산
  const imgRatio = imgWidth / imgHeight;
  const containerRatio = containerWidth / containerHeight;

  console.log(containerWidth, 'width');
  console.log(containerHeight, 'height');
  console.log(imgWidth, 'imgWidth');
  console.log(imgHeight, 'imgHeight');

  let drawWidth;
  let drawHeight;

  // 컨테이너 크기에 맞춰 이미지 크기 조정
  if (imgRatio > containerRatio) {
    drawWidth = containerWidth;
    drawHeight = containerWidth / imgRatio;
  } else {
    drawHeight = containerHeight;
    drawWidth = containerHeight * imgRatio;
  }

  // 잘라낼 영역 계산 (비율에 맞게 조정된 크기 기준)
  const sx = (imgWidth - (zoomBoxWidth / scale) * (imgWidth / drawWidth)) / 2;
  const sy = (imgHeight - (zoomBoxHeight / scale) * (imgHeight / drawHeight)) / 2;
  const sWidth = (zoomBoxWidth / scale) * (imgWidth / drawWidth);
  const sHeight = (zoomBoxHeight / scale) * (imgHeight / drawHeight);

  ctx.canvas.width = zoomBoxWidth;
  ctx.canvas.height = zoomBoxHeight;

  ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, zoomBoxWidth, zoomBoxHeight);
};

const saveCanvasToBlob = (
  canvas: HTMLCanvasElement,
  callback: (blob: Blob | null) => void,
) => {
  canvas.toBlob(callback, 'image/png');
};

export default useZoomableSingleCut;
