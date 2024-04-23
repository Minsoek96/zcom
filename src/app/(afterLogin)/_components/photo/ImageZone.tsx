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

  const handleClick = (type: 'pre' | 'next') => {
    const changePhotoId = type === 'pre' ? Number(photoid) - 1 : Number(photoid) + 1;
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
  return (
    <Container>
      <Wrrapper $currentIndex={current} $type={btype}>
        {data?.Images.map((image) => (
          <PhotoItem key={image.imageId} image={image} idx={Number(photoid)} />
        ))}
      </Wrrapper>
      <div onClick={() => handleClick('pre')}>
        <PreArrow />
      </div>
      <div onClick={() => handleClick('next')}>
        <NextArrow />
      </div>
      <div onClick={handleClose}>
        <CloseIcon />
      </div>
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
  width: 100%;
  height: 95%;

  > div:nth-child(2),
  > div:nth-child(3) {
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
  }

  > div:nth-child(2) {
    left: 10px;
  }

  > div:nth-child(3) {
    right: 10px;
  }

  > div:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    left: 16px;
    width: 34px;
    height: 34px;
    border-radius: 9999px;
    background-color: black;
    svg {
      fill: white;
    }
  }

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
