import { styled } from 'styled-components';

type PostBtn = {
  name: string;
  onClick: () => void;
};

function PostBtn({ name, onClick }: PostBtn) {
  return <Container onClick={onClick}>{name}</Container>;
}

export default PostBtn;

const Container = styled.button.attrs({
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

  &:hover{
    background-color: rgb(26, 140, 216);
  }
`;
