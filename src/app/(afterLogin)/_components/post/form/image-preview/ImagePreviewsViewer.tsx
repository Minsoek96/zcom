import { useCallback, useState } from 'react';

import { styled } from 'styled-components';

import useMediaStateStore from '@/app/_store/useMediaStateStore';

import key from '@/app/_utils/key';

import { useRouter } from 'next/navigation';
import SliderActions from '../../../photo/SliderActions';
import ImageItem from './ImageItem';

export default function ImagePreviewsViewer() {
  const router = useRouter();
  const { imagePreviews, setRemoveImage, setSeletedImage } = useMediaStateStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const isShowArrow = imagePreviews.length > 1;

  const handleClickArrow = useCallback(
    (type: 'pre' | 'next') => {
      setActiveIndex((arrowIndex) => {
        if (type === 'pre') {
          return arrowIndex === 0 ? imagePreviews.length - 2 : arrowIndex - 1;
        }
        return arrowIndex === imagePreviews.length - 2 ? 0 : arrowIndex + 1;
      });
    },
    [imagePreviews.length],
  );

  const handleRemoveImage = (url: string) => {
    URL.revokeObjectURL(url);
    setRemoveImage(url);
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleUpdateImage = (url: string) => {
    setSeletedImage(url);
    router.push('/compose/tweet/media');
  };

  return (
    <ImagePreviewContainer>
      <ImageSliderWrrapper $activeIndex={activeIndex}>
        {imagePreviews.map((src, index) => (
          <ImageItem
            key={key(src, index)}
            imgSrc={src}
            imglength={imagePreviews.length}
            onUpdateImage={handleUpdateImage}
            onRemoveImage={handleRemoveImage}
          />
        ))}
      </ImageSliderWrrapper>
      <SliderActions
        onArrow={handleClickArrow}
        isNextBlock={isShowArrow}
        isPreBlock={isShowArrow}
        closeBlock
      />
    </ImagePreviewContainer>
  );
}

const ImagePreviewContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  height: 30rem;
  max-height: 30rem;
  img {
    border-radius: 20px;
  }

  svg {
    z-index: 10;
  }
`;

const ImageSliderWrrapper = styled.div<{ $activeIndex: number }>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.$activeIndex * 50}%)`};
  gap: 8px;
`;
