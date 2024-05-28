import { ForwardedRef } from 'react';

import { styled } from 'styled-components';

import Image from 'next/image';

type ImageViewerProps = {
  scale: number;
  imageRef: ForwardedRef<HTMLImageElement>;
  src: string;
  alt: string;
  zoomTypeWidth: number;
  zoomTypeHeight: number;
};

export default function ZoomableImage({
  scale,
  imageRef,
  src,
  alt,
  zoomTypeWidth,
  zoomTypeHeight,
}: ImageViewerProps) {
  return (
    <ImageContainer $scale={scale}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
      />
      <CenterBox $zoomWidth={zoomTypeWidth} $zoomHeight={zoomTypeHeight} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div<{ $scale: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 60rem;
  height: 62rem;
  overflow: hidden;

  img {
    transform: scale(${(props) => props.$scale});
    max-width: 100%;
    max-height: 100%;
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
