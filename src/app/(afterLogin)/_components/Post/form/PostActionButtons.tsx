import { styled } from 'styled-components';

import ButtonIcon from '@/app/_components/ui/ButtonIcon';
import PostBtn from '@/app/_components/ui/PostBtn';
import { PictureIcon } from '../../../_constants/MenuIcons';

type PostActionButtonProps = {
  btnText?: string
}
function PostActionButtons({ btnText = '게시하기' }:PostActionButtonProps) {
  return (
    <Container>
      <div>
        <ButtonIcon
          icon={<PictureIcon />}
          hoverColor={['rgba(29, 155, 240, 0.1)', '']}
          isClick
        />
      </div>
      <div>
        <PostBtn name={btnText} onClick={() => alert('d')} />
      </div>
    </Container>
  );
}

export default PostActionButtons;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    fill: rgb(26, 140, 216);
    width: 25px;
    height: 25px;
  }

  button:last-child {
    width: inherit;
    padding-inline: 15px;
    height: 36px;
    font-size: 15px;
    background-color: none;
  }
`;
