import { styled } from 'styled-components';
import { CloseIcon, NextArrow, PreArrow } from '../../_constants/MenuIcons';

type SliderActionsProps = {
    isPreBlock: boolean;
    isNextBlock: boolean;
    onArrow: (type:'pre'|'next') => void;
    onClose: () => void;
}
export default function SliderActions({
  isPreBlock, isNextBlock, onArrow, onClose,
}:SliderActionsProps) {
  return (
    <>
      {isPreBlock && (
        <PreArrowWrrapper onClick={() => onArrow('pre')}>
          <PreArrow />
        </PreArrowWrrapper>
      )}
      {isNextBlock && (
        <NextArrowWrrpper onClick={() => onArrow('next')}>
          <NextArrow />
        </NextArrowWrrpper>
      )}
      <CloseWrrapper onClick={onClose}>
        <CloseIcon />
      </CloseWrrapper>
    </>
  );
}

const ArrowBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 9999px;
  background-color: black;
  width: 34px;
  height: 34px;
  cursor: pointer;

  svg {
    fill: white;
  }

  &:hover {
    background-color: rgba(26,26,26,0.75)
  }
`;

const PreArrowWrrapper = styled(ArrowBase)`
  left: 10px;
`;

const NextArrowWrrpper = styled(ArrowBase)`
  right: 10px;
`;

const CloseWrrapper = styled(ArrowBase)`
  top: 16px;
  left: 16px;
  transform: none;
`;
