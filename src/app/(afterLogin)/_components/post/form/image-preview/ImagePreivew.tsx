import { useCallback, useState } from 'react';

import { styled } from 'styled-components';

import Image from 'next/image';

import usePostStateStore from '@/app/_store/usePostStateStore';

import key from '@/app/_utils/key';

import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import { useRouter } from 'next/navigation';
import SliderActions from '../../../photo/SliderActions';

export default function ImagePreview() {
  const router = useRouter();
  const { imagePreviews, setRemoveImage } = usePostStateStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const isShowArrow = imagePreviews.length > 1;

  const handleClickArrow = useCallback(
    (type: 'pre' | 'next') => {
      setActiveIndex((prevIndex) => {
        if (type === 'pre') {
          return prevIndex === 0 ? imagePreviews.length - 1 : prevIndex - 1;
        }
        return prevIndex === imagePreviews.length - 1 ? 0 : prevIndex + 1;
      });
    },
    [imagePreviews.length],
  );

  const handleRemoveImage = (url: string) => {
    URL.revokeObjectURL(url);
    setRemoveImage(url);
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleUpdateImage = () => {
    router.push('/compose/tweet/media');
  };

  return (
    <ImagePreviewContainer>
      <ImagePreviewWrrapper $activeIndex={activeIndex}>
        {imagePreviews.map((src, index) => (
          <Slide key={key(src, index)} $length={imagePreviews.length}>
            <Image
              src={src}
              alt="preview"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <UpdateWrrapper onClick={handleUpdateImage}>
              <span>수정</span>
            </UpdateWrrapper>
            <CloseWrrapper onClick={() => handleRemoveImage(src)}>
              <CloseIcon />
            </CloseWrrapper>
          </Slide>
        ))}
      </ImagePreviewWrrapper>
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
    z-index: 1000;
  }
`;

const ImagePreviewWrrapper = styled.div<{ $activeIndex: number }>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.$activeIndex * 100}%)`};
  gap: 8px;
`;

const Slide = styled.div<{ $length: number }>`
  width: ${(props) => (props.$length === 1 ? '100%' : '49%')};
  height: 100%;
  flex-shrink: 0;
  position: relative;
`;

const ArrowBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 9999px;
  background-color: black;
  width: 3.4rem;
  height: 3.4rem;
  cursor: pointer;

  svg {
    fill: white;
  }

  &:hover {
    background-color: rgba(26, 26, 26, 0.75);
  }
`;

const CloseWrrapper = styled(ArrowBase)`
  top: 1.1rem;
  right: 1.1rem;
  transform: none;
`;

const UpdateWrrapper = styled(ArrowBase)`
  top: 1.1rem;
  left: 1.1rem;
  transform: none;
`;
