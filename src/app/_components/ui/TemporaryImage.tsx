import { useState, CSSProperties } from 'react';
import styled from 'styled-components';

type TemporaryImageProps = {
  src: string;
  alt: string;
  imageWidth?: string;
  imageHeight?: string;
  imageStyle?: CSSProperties;
};

export default function TemporaryImage({
  src,
  alt,
  imageWidth = '100%',
  imageHeight = '100%',
  imageStyle = {},
}: TemporaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageContainer $width={imageWidth} $height={imageHeight}>
      {!isLoaded && <Skeleton />}
      <picture>
        <source srcSet={src} type="image/webp" />
        <source srcSet={src} type="image/jpeg" />
        <StyledImg
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          $isLoaded={isLoaded}
          style={imageStyle}
        />
      </picture>
    </ImageContainer>
  );
}

type ContainerSize = {
  $width: string;
  $height: string;
};

const ImageContainer = styled.div<ContainerSize>`
  position: relative;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
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

const StyledImg = styled.img<{ $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.$isLoaded ? 'block' : 'none')};
`;
