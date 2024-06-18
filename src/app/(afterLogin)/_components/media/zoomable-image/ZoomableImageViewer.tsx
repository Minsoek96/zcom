import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { TemporaryMedia, ZoomProps } from '@/app/_types/MediaType';

import useZoomableSingleCut from '@/app/_hooks/useZoomableSingleCut';
import useDeBounce from '@/app/_hooks/useDebounce';

import useTemporaryMediaStore from '@/app/_store/useTemporaryMediaStore';

import { RectangleIcon } from '../../../_constants/MenuIcons';
import ZoomableImage from './ZoomableImage';
import ZoomableController from './ZoomableController';

const ZoomInitalState: ZoomProps = {
  id: '',
  type: 'origin',
  width: 50,
  height: 35,
  icon: <RectangleIcon />,
};

type ZoomableImageProps = {
  src: string;
  alt: string;
  isSelectedMedia: boolean;
};

function ZoomableImageViewer({ src, alt, isSelectedMedia }: ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const [zoomType, setZoomType] = useState<ZoomProps>(ZoomInitalState);
  const deBounceScale = useDeBounce({ value: scale, delay: 500 });
  const { addTemporaryMedia } = useTemporaryMediaStore();

  const { imageRef, canvasRef } = useZoomableSingleCut(
    src,
    deBounceScale,
    zoomType,
  );

  useEffect(() => {
    const saveTemporaryMedia = () => {
      const newMedia: TemporaryMedia = {
        zoomSize: {
          width: zoomType.width,
          height: zoomType.height,
        },
        scale: deBounceScale,
        mediaSrc: src,
      };
      addTemporaryMedia(newMedia);
    };

    if (deBounceScale === scale) {
      saveTemporaryMedia();
    }
  }, [deBounceScale, scale, addTemporaryMedia, zoomType, src]);

  // TODO: 각 컴포넌트의 상태값을 임시 저장후, 저장 버튼이 눌리면 일괄 편집 처리 기능 구현
  const handleOnScaleChange = (changeScale: number) => {
    setScale(changeScale);
  };

  return (
    <Container $isSelected={isSelectedMedia}>
      <ZoomableImage
        scale={scale}
        imageRef={imageRef}
        src={src}
        alt={alt}
        zoomTypeWidth={zoomType.width}
        zoomTypeHeight={zoomType.height}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <ZoomableController
        scale={scale}
        type={zoomType.type}
        onScaleChange={handleOnScaleChange}
        onTypeChange={setZoomType}
      />
    </Container>
  );
}

export default ZoomableImageViewer;

const Container = styled.div<{ $isSelected: boolean }>`
  display: ${(props) => (props.$isSelected ? 'display' : 'none')};
  flex-direction: column;
  align-items: center;
`;
