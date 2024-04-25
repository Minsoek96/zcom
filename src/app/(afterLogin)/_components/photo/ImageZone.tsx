'use client';

import getPostDetail from '@/app/_lib/getPostDetail';
import { Post } from '@/app/_types/Post';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { useState } from 'react';
import PhotoItem from './photo-item/PhotoItem';
import { CloseIcon, NextArrow, PreArrow } from '../../_constants/MenuIcons';
import UserActionButtons from '../post/post-item/UserActionButtons';

type ImageZoneProps = {
  photoid: string;
  id: string;
};
export default function ImageZone({ photoid, id }: ImageZoneProps) {
  const [current, setCurrent] = useState(0);
  const [btype, setBtype] = useState('');

  const router = useRouter();
  const photoNumber = Number(photoid);

  const handleClick = (type: 'pre' | 'next') => {
    const changePhotoId = type === 'pre' ? photoNumber - 1 : photoNumber + 1;
    setBtype(type);
    setCurrent(1);
    router.replace(`/elonmusk/status/${id}/photo/${changePhotoId}`);
  };

  const handleClose = () => {
    router.back();
  };

  // TOOD: 이미지 슬라이더 구현 URL변경이 ??
  const { data } = useQuery<Post, Error, Post, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getPostDetail,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  const isPreBlock = photoNumber > 1;
  const isNextBlock = photoNumber < (data?.Images.length ?? 0);

  return (
    <Container>
      <Wrrapper $currentIndex={current} $type={btype}>
        {data?.Images.map((image) => (
          <PhotoItem key={image.imageId} image={image} idx={Number(photoid)} />
        ))}
      </Wrrapper>
      {isPreBlock && (
        <PreArrowWrrapper onClick={() => handleClick('pre')}>
          <PreArrow />
        </PreArrowWrrapper>
      )}
      {isNextBlock && (
        <NextArrowWrrpper onClick={() => handleClick('next')}>
          <NextArrow />
        </NextArrowWrrpper>
      )}
      <CloseWrrapper onClick={handleClose}>
        <CloseIcon />
      </CloseWrrapper>
      <UserActionButtons fill="white" />
    </Container>
  );
}

const ArrowBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 9999px;
  background-color: black;
  width: 34px;
  height: 34px;

  svg {
    fill: white;
  }
`;

const PreArrowWrrapper = styled(ArrowBase)`
  left: 10px;
`;

const NextArrowWrrpper = styled(ArrowBase)`
  right: 10px;
`;

const CloseWrrapper = styled(ArrowBase)`
  top: 16px;
  left: 16px;
  transform: none;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95%;

  > div:last-child {
    display: flex;
    width: 873px;
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
  transition: transform 0.2s ease;
`;
