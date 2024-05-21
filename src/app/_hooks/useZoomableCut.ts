import { useCallback, useRef } from 'react';

import useMediaStateStore from '@/app/_store/useMediaStateStore';

import { ZoomProps } from '@/app/_types/MediaType';

const useZoomableCut = (src: string, scale: number, zoomType: ZoomProps) => {
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
  const zoomBoxWidth = zoomType.width * 10;
  const zoomBoxHeight = zoomType.height * 10;
  const sx = img.width / 2 - zoomBoxWidth / 2 / scale;
  const sy = img.height / 2 - zoomBoxHeight / 2 / scale;
  const sWidth = zoomBoxWidth / scale;
  const sHeight = zoomBoxHeight / scale;
  const dWidth = zoomBoxWidth;
  const dHeight = zoomBoxHeight;

  ctx.canvas.width = zoomBoxWidth;
  ctx.canvas.height = zoomBoxHeight;

  ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
};

const saveCanvasToBlob = (
  canvas: HTMLCanvasElement,
  callback: (blob: Blob | null) => void,
) => {
  canvas.toBlob(callback, 'image/png');
};

export default useZoomableCut;
