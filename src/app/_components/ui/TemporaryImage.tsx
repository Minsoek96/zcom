import { useState } from 'react';
import styled from 'styled-components';

type TemporaryImageProps = {
  src: string;
  alt: string;
};

export default function TemporaryImage({ src, alt }: TemporaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageContainer>
      {!isLoaded && <Skeleton />}
      <picture>
        <source srcSet={src} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <StyledImg src={src} alt={alt} onLoad={() => setIsLoaded(true)} isLoaded={isLoaded} />
      </picture>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  background: white;
  background-size: 200% 100%;
  border-radius: 18px;
`;

const StyledImg = styled.img<{ isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.isLoaded ? 'block' : 'none')};
`;
