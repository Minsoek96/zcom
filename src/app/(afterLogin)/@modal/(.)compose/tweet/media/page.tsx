'use client';

import Media from '@/app/(afterLogin)/_components/media/Media';
import { styled } from 'styled-components';

function MediaPage() {
  return (
    <Container>
      <ModalContainer>
        <Media />
      </ModalContainer>
    </Container>
  );
}

export default MediaPage;

const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.overlay};
`;

const ModalContainer = styled.div`
  font-size: 1rem;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 5%;
  background-color: ${(props) => props.theme.colors.themeColor};
  min-width: 60rem;
  max-height: calc(96rem);
  height: 83rem;
  border-bottom-left-radius: 1.6em;
  border-bottom-right-radius: 1.6em;
  border-top-left-radius: 1.6em;
  border-top-right-radius: 1.6em;
  padding-inline: 1.5em;
`;
