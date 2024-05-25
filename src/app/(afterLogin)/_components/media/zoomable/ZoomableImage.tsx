import { useState } from 'react';

import styled from 'styled-components';

import useZoomableCut from '@/app/_hooks/useZoomableCut';

import { ZoomProps } from '@/app/_types/MediaType';

import useDeBounce from '@/app/_hooks/useDebounce';
import { RectangleIcon } from '../../../_constants/MenuIcons';
import ZoomableImageViewer from './ZoomableImageViewer';
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

function ZoomableImage({ src, alt, isSelectedMedia }: ZoomableImageProps) {
  const [scale, setScale] = useState(1);
  const [zoomType, setZoomType] = useState<ZoomProps>(ZoomInitalState);
  const deBounceScale = useDeBounce({ value: scale, delay: 500 });

  const { imageRef, canvasRef, handleSave } = useZoomableCut(src, deBounceScale, zoomType);

  // TODO: 각 컴포넌트의 상태값을 임시 저장후, 저장 버튼이 눌리면 일괄 편집 처리 기능 구현 생각하기
  const handleOnScaleChange = (changeScale: number) => {
    if (scale === deBounceScale) {
      console.log(deBounceScale, 'scale값');
      console.log(zoomType, 'zoomType값');
    }
    setScale(changeScale);
  };

  return (
    <Container $isSelected={isSelectedMedia}>
      <ZoomableImageViewer
        scale={scale}
        imageRef={imageRef}
        src={src}
        alt={alt}
        zoomTypeWidth={zoomType.width}
        zoomTypeHeight={zoomType.height}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Button onClick={handleSave}>이미지 저장</Button>
      <ZoomableController
        scale={scale}
        type={zoomType.type}
        onScaleChange={handleOnScaleChange}
        onTypeChange={setZoomType}
      />
    </Container>
  );
}

export default ZoomableImage;

const Container = styled.div<{ $isSelected: boolean }>`
  display: ${(props) => (props.$isSelected ? 'display' : 'none')};
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 10px;
`;
