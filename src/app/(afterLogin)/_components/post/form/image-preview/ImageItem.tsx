import { styled } from 'styled-components';

import Image from 'next/image';

import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

type ImageItemProps = {
    imglength : number;
    imgSrc : string;
    onUpdateImage: (src: string) => void;
    onRemoveImage: (src: string) => void;
}

export default function ImageItem({
  imglength, imgSrc, onRemoveImage, onUpdateImage,
}:ImageItemProps) {
  return (
    <ImageContainer $length={imglength}>
      <Image
        src={imgSrc}
        alt="preview"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <UpdateWrrapper onClick={() => onUpdateImage(imgSrc)}>
        <span>수정</span>
      </UpdateWrrapper>
      <CloseWrrapper onClick={() => onRemoveImage(imgSrc)}>
        <CloseIcon />
      </CloseWrrapper>
    </ImageContainer>
  );
}

const ImageContainer = styled.div<{ $length: number }>`
  width: ${(props) => (props.$length === 1 ? '100%' : '49%')};
  height: 100%;
  flex-shrink: 0;
  position: relative;
`;

const ArrowBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 9999px;
  background-color: black;
  width: 3.4rem;
  height: 3.4rem;
  cursor: pointer;

  svg {
    fill: white;
  }

  &:hover {
    background-color: rgba(26, 26, 26, 0.75);
  }
`;

const CloseWrrapper = styled(ArrowBase)`
  top: 1.1rem;
  right: 1.1rem;
  transform: none;
`;

const UpdateWrrapper = styled(ArrowBase)`
  font-size: 1.4rem;
  top: 1.1rem;
  left: 1.1rem;
  transform: none;
  padding-inline: 1.2em;
  width: 6.2rem;
  text-align: center;
`;
