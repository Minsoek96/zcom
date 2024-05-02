import { PostIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import styled, { css } from 'styled-components';

type PostBtn = {
  name: string;
  onClick: () => void;
  media?: boolean;
};

function PostBtn({ name, onClick, media = false }: PostBtn) {
  return (
    <Container onClick={onClick} $media={media}>
      <span>{name}</span>
      {media && <PostIcon />}
    </Container>
  );
}

export default PostBtn;

type Props = {
  $media: boolean;
};

const Container = styled.button.attrs<Props>({
  type: 'button',
})`
  width: 233px;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  color: #fff;
  background: #1d9bf0;
  border-radius: 9999px;
  border: none;
  height: 54px;
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 140, 216);
  }

  svg {
    display: none;
    fill: white;
  }

  @media screen and (max-width: 1300px) {
    ${({ $media }) => $media
      && css`
        width: 50px;
        height: 50px;

        span {
          display: none;
        }

        svg {
          display: inline;
        }
      `}
  }
`;
