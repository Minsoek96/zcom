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
  position: relative;
  width: 873px;
  height: 873px;
`;
