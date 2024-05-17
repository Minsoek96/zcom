'use client';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import { useCallback, useState } from 'react';

import useFetchPostDetail from '@/app/_hooks/useFetchPostDeatil';
import useSliderKeyEvent from './hooks/useSliderKeyEvent';

import PhotoItem from './photo-item/PhotoItem';
import UserActionButtons from '../post/post-item/UserActionButtons';
import SliderActions from './SliderActions';

type ImageSliderProps = {
  photoid: string;
  id: string;
};
export default function ImageSlider({ photoid, id }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [arrowType, setArrowType] = useState('');

  const { post } = useFetchPostDetail({ id });

  const router = useRouter();

  const photoNumber = Number(photoid);
  const isPreBlock = photoNumber > 1;
  const isNextBlock = photoNumber < (post?.Images.length ?? 0);

  const handleClick = useCallback(
    (type: 'pre' | 'next') => {
      const changePhotoId = type === 'pre' ? photoNumber - 1 : photoNumber + 1;
      setArrowType(type);
      setCurrent(1);
      router.replace(`/${post?.User}/status/${id}/photo/${changePhotoId}`);
    },
    [photoNumber, router],
  );

  const handleClose = () => {
    router.back();
  };

  useSliderKeyEvent({
    onClick: handleClick,
    isNextBlock,
    isPreBlock,
    photoid,
  });

  // TOOD: 이미지 슬라이더 구현 URL변경이 ??

  return (
    <Container>
      <Wrrapper $currentIndex={current} $type={arrowType}>
        {post?.Images.map((image) => (
          <PhotoItem key={image.imageId} image={image} idx={Number(photoid)} />
        ))}
      </Wrrapper>
      <SliderActions
        onArrow={handleClick}
        onClose={handleClose}
        isNextBlock={isNextBlock}
        isPreBlock={isPreBlock}
      />
      <UserActionButtons fill="white" />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 95%;

  > div:last-child {
    position: fixed;
    bottom: 1.2rem;
    display: flex;
    width: 87.3rem;
  }
`;

type WrrapperProps = {
  $currentIndex: number;
  $type: string;
};

const Wrrapper = styled.div<WrrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.$type === 'pre'
    ? `translateX(${props.$currentIndex * 100}%)`
    : `translateX(-${props.$currentIndex * 100}%)`)};
  transition: transform 0.5s ease;
`;
