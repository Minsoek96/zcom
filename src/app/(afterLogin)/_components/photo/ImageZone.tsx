'use client';

import getPostDetail from '@/app/_lib/getPostDetail';
import { Post } from '@/app/_types/Post';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { useState } from 'react';
import PhotoItem from './photo-item/PhotoItem';

type ImageZoneProps = {
  photoid: string;
  id: string;
};
export default function ImageZone({ photoid, id }: ImageZoneProps) {
  const [current, setCurrent] = useState(0);
  const [btype, setBtype] = useState('');

  const router = useRouter();

  const handleClick = (type:'pre'|'next') => {
    const changePhotoId = Number(photoid) + 1;
    setBtype(type);
    setCurrent(1);
    router.push(`/elonmusk/status/${id}/photo/${changePhotoId}`);
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
      <Wrrapper currentIndex={current} type={btype}>
        {data?.Images.map((image) => (
          <PhotoItem key={image.imageId} image={image} idx={3} />
        ))}
      </Wrrapper>
      <button type="button" onClick={() => handleClick('pre')}>
        {'<-'}
      </button>
      <button type="button" onClick={() => handleClick('next')}>
        {'->'}
      </button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 95%;

  > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  > button:first-child {
    left: 10px;
  }

  > button:last-child {
    right: 10px;
  }
`;

type WrrapperProps = {
  currentIndex: number;
  type: string;
};

const Wrrapper = styled.div<WrrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.type === 'pre'
    ? `translateX(-${props.currentIndex * 100}%)`
    : `translateX(${props.currentIndex * 100}%)`)};
  transition: transform 0.5s ease;
`;
