import { PostImage } from '@/app/_types/PostImage';
import Image from 'next/image';
import styled from 'styled-components';

type PhotoItemProps = {
  image: PostImage;
  idx: number;
};
export default function PhotoItem({ image, idx }: PhotoItemProps) {
  const { link } = image;
  const isSelect = idx === image.imageId;
  return (
    isSelect && (
      <Container>
        <Image src={link} alt={link} layout="fill" objectFit="cover" />
      </Container>
    )
  );
}

const Container = styled.div`
  position: relative; /* Image 컴포넌트가 fill 레이아웃을 사용할 때 필요합니다. */
  width: 100%; /* 컨테이너의 너비를 지정합니다. */
  height: 100%; /* 컨테이너의 높이를 지정합니다. */
`;
