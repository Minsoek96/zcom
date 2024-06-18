import Link from 'next/link';

import styled, { css } from 'styled-components';

import TemporaryImage from '@/app/_components/ui/TemporaryImage';

import { Post } from '@/app/_types/Post';

type PostImagesProps = {
  post: Post;
};

export default function PostImages({ post }: PostImagesProps) {
  const { Images, User, postId } = post;

  if (!Images || Images.length === 0) {
    return null;
  }

  return (
    <Container $count={Images.length}>
      {Images.map((image) => (
        <StyledImageWrapper key={image.imageId}>
          <StyleLink
            href={`/${User.id}/status/${postId}/photo/${image.imageId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <TemporaryImage src={image.link} alt={`${User.id}'s image`} />
          </StyleLink>
        </StyledImageWrapper>
      ))}
    </Container>
  );
}

// Vercel 402 Payment 처방
// <Image
//     src={image.link}
//     alt={`${User.id}'s image`}
//     fill
//     style={{ objectFit: 'cover' }}
//   />

const OneImage = css`
  display: flex;
  > div {
    width: 100%;
    height: 100%;

    img {
      border-radius: 1.8rem;
    }
  }
`;

const TwoImage = css`
  display: flex;
  flex-direction: row;
  gap: 4px;

  > div {
    width: 50%;
    height: 27rem;
  }

  > div:nth-child(1) {
    img {
      border-top-left-radius: 1.8rem;
      border-bottom-left-radius: 1.8rem;
    }
  }

  > div:nth-child(2) {
    img {
      border-top-right-radius: 1.8rem;
      border-bottom-right-radius: 1.8rem;
    }
  }
`;

const ThreeImage = css`
  display: grid;
  grid-template-areas:
    "a a b b"
    "a a c c";
  gap: 0.4rem;

  > div:nth-child(1) {
    grid-area: a;
    img {
      border-top-left-radius: 1.8rem;
      border-bottom-left-radius: 1.8rem;
    }
  }

  > div:nth-child(2) {
    grid-area: b;
    img {
      border-top-right-radius: 1.8rem;
    }
  }

  > div:nth-child(3) {
    grid-area: c;
    img {
      border-bottom-right-radius: 1.8rem;
    }
  }
`;

const FourImage = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  > div:nth-child(1) {
    img {
      border-top-left-radius: 1.8rem;
    }
  }

  > div:nth-child(2) {
    img {
      border-top-right-radius: 1.8rem;
    }
  }

  > div:nth-child(3) {
    img {
      border-bottom-left-radius: 1.8rem;
    }
  }

  > div:nth-child(4) {
    img {
      border-bottom-right-radius: 1.8rem;
    }
  }
`;

const Container = styled.div<{ $count: number }>`
  width: 100%;
  max-width: 50.5rem;
  height: 27rem;
  margin-top: 1.1rem;

  img:hover {
    cursor: pointer;
  }

  ${({ $count }) => $count === 1 && OneImage}

  ${({ $count }) => $count === 2 && TwoImage}

  ${({ $count }) => $count === 3 && ThreeImage}

  ${({ $count }) => $count === 4 && FourImage}
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

const StyleLink = styled(Link)`
  position: absolute;
  // 추가적인 스타일링은 여기에 적용
  display: block;
  width: 100%;
  height: 100%;
`;
