'use client';

import getPostDetail from '@/app/_lib/getPostDetail';
import { Post } from '@/app/_types/Post';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import PhotoItem from './photo-item/PhotoItem';

type ImageZoneProps = {
  photoid: string;
  id: string;
};
export default function ImageZone({ photoid, id }: ImageZoneProps) {
  const router = useRouter();
  console.log(router);

  // TOOD: 이미지 슬라이더 구현 URL변경이 ??
  const { data } = useQuery<Post, Error, Post, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getPostDetail,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  return (
    <div style={{ width: '100%', height: '95%' }}>
      <p>{photoid}</p>
      {data?.Images.map((image) => (
        <PhotoItem key={image.imageId} image={image} idx={3} />
      ))}
    </div>
  );
}
