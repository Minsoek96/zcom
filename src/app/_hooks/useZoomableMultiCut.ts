import { useCallback } from 'react';

import useMediaStateStore from '@/app/_store/useMediaStateStore';

import useTemporaryMediaStore from '../_store/useTemporaryMediaStore';

const useZoomableMultiCut = () => {
  const { setUpdateImage } = useMediaStateStore();
  const { temporaryMedias, clearTemporaryMedias } = useTemporaryMediaStore();

  const saveEditedMedia = useCallback(() => {
    console.log(temporaryMedias);
    if (temporaryMedias.length < 0) return;
    temporaryMedias.forEach(({ mediaSrc, scale, zoomSize }) => {
      const img = new Image();
      img.src = mediaSrc;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawImageToCanvas(ctx, img, scale, zoomSize);
          saveCanvasToBlob(canvas, (blob) => {
            if (blob) {
              const fileUrl = URL.createObjectURL(blob);
              setUpdateImage(mediaSrc, fileUrl);
            }
          });
        }
      };
    });
    clearTemporaryMedias();
  }, [setUpdateImage, temporaryMedias, clearTemporaryMedias]);

  return { saveEditedMedia };
};

const drawImageToCanvas = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  scale: number,
  zoomSize: {
    width: number;
    height: number;
  },
) => {
  const containerWidth = 600;
  const containerHeight = 620;

  const zoomBoxWidth = zoomSize.width * 10;
  const zoomBoxHeight = zoomSize.height * 10;

  // 원본 이미지 크기
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  // console.log(containerWidth, 'width');
  // console.log(containerHeight, 'height');
  // console.log(imgWidth, 'imgWidth');
  // console.log(imgHeight, 'imgHeight');

  // 이미지 비율 계산
  const imgRatio = imgWidth / imgHeight;
  const containerRatio = containerWidth / containerHeight;

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

  ctx.drawImage(
    img,
    sx,
    sy,
    sWidth,
    sHeight,
    0,
    0,
    zoomBoxWidth,
    zoomBoxHeight,
  );
};

const saveCanvasToBlob = (
  canvas: HTMLCanvasElement,
  callback: (blob: Blob | null) => void,
) => {
  canvas.toBlob(callback, 'image/png');
};

export default useZoomableMultiCut;
