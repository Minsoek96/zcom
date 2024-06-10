import { useRef } from 'react';

import { styled } from 'styled-components';

import ButtonIcon from '@/app/_components/ui/ButtonIcon';
import PostBtn from '@/app/_components/ui/PostBtn';

import { PictureIcon } from '../../../_constants/MenuIcons';

type PostActionButtonProps = {
  btnText?: string;
  handleImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function PostActionButtons({
  btnText = '게시하기',
  handleImageUpload = () => {},
}: PostActionButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <Container>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          multiple
          hidden
        />
        <ButtonIcon
          icon={<PictureIcon />}
          hoverColor={['rgba(29, 155, 240, 0.1)', '']}
          isClick
          onClick={handleClick}
        />
      </div>
      <div>
        <PostBtn name={btnText} onClick={() => console.log('게시하기')} />
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
    fill: ${(props) => props.theme.colors.mainColor};
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
