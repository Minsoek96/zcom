import { Post } from '@/app/_types/Post';

import Image from 'next/image';
import Link from 'next/link';

import styled, { css } from 'styled-components';

const OneImage = css`
  display: flex;
  > div {
    width: 100%;
    height: 100%;

    img {
      border-radius: 18px;
    }
  }
`;

const TwoImage = css`
  display: flex;
  flex-direction: row;
  gap: 4px;

  > div {
    width: 260px;
    height: 270px;
  }

  > div:nth-child(1) {
    img {
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
    }
  }

  > div:nth-child(2) {
    img {
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }
`;

const ThreeImage = css`
  display: grid;
  grid-template-areas:
    "a a b b"
    "a a c c";
  gap: 4px;

  > div:nth-child(1) {
    grid-area: a;
    img {
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
    }
  }

  > div:nth-child(2) {
    grid-area: b;
    img {
      border-top-right-radius: 18px;
    }
  }

  > div:nth-child(3) {
    grid-area: c;
    img {
      border-bottom-right-radius: 18px;
    }
  }
`;

const FourImage = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  > div:nth-child(1) {
    img {
      border-top-left-radius: 18px;
    }
  }

  > div:nth-child(2) {
    img {
      border-top-right-radius: 18px;
    }
  }

  > div:nth-child(3) {
    img {
      border-bottom-left-radius: 18px;
    }
  }

  > div:nth-child(4) {
    img {
      border-bottom-right-radius: 18px;
    }
  }
`;

const Container = styled.div<{ count: number }>`
  width: 505px;
  height: 270px;
  margin-top: 11px;

  img:hover {
    cursor: pointer;
  }

  ${({ count }) => count === 1 && OneImage}

  ${({ count }) => count === 2 && TwoImage}

  ${({ count }) => count === 3 && ThreeImage}

  ${({ count }) => count === 4 && FourImage}
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

type PostImagesProps = {
  post: Post;
};

export default function PostImages({ post }: PostImagesProps) {
  const { Images, User, postId } = post;

  if (!Images || Images.length === 0) {
    return null;
  }

  return (
    <Container count={Images.length}>
      {Images.map((image) => (
        <StyledImageWrapper key={image.imageId}>
          <Link href={`/${User.id}/status/${postId}/photo/${image.imageId}`} onClick={(e) => e.stopPropagation()}>
            <Image
              src={image.link}
              alt={`${User.id}'s image`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </StyledImageWrapper>
      ))}
    </Container>
  );
}
