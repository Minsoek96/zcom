import styled from 'styled-components';

import TemporaryImage from '@/app/_components/ui/TemporaryImage';
import { PostImage } from '@/app/_types/PostImage';

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
        <TemporaryImage
          src={link}
          alt={link}
        />
      </Container>
    )
  );
}

// Vercel Payment 402 방지
// ㅇ<Image
// src={link}
// alt={link}
// fill
// style={{ objectFit: 'cover' }}
// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
// priority
// />

const Container = styled.div`
  position: relative;
  width: 87.3rem;
  height: 87.3rem;
`;
