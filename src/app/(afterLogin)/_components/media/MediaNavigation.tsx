import styled from 'styled-components';
import { NextArrow, PreArrow } from '../../_constants/MenuIcons';

type NavigationProps = {
  onPreClick: () => void;
  onNextClick: () => void;
  onSaveClick: () => void;
  text: string;
};
export default function MediaNaviagation({
  onPreClick,
  onNextClick,
  onSaveClick,
  text,
}: NavigationProps) {
  return (
    <Container>
      <div onClick={onPreClick}>
        <PreArrow />
      </div>
      <div onClick={onNextClick}>
        <NextArrow />
      </div>
      <button type="button" onClick={onSaveClick}>
        {text}
      </button>
    </Container>
  );
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
