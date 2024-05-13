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
  width: 23.3rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.9rem;
  color: #fff;
  background: ${(props) => props.theme.colors.mainColor};
  border-radius: 9999px;
  border: none;
  height: 5.4rem;
  cursor: pointer;

  &:hover {
    background-color:${(props) => props.theme.colors.subColor};
  }

  svg {
    display: none;
    fill: white;
  }

  @media screen and (max-width: 1300px) {
    ${({ $media }) => $media
      && css`
        width: 5.0rem;
        height: 5.0rem;

        span {
          display: none;
        }

        svg {
          display: inline;
        }
      `}
  }
`;
