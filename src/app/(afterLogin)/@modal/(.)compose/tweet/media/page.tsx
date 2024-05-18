'use client';

import { styled } from 'styled-components';

function Media() {
  return (
    <Container>
      <ModalContainer />
    </Container>
  );
}

export default Media;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
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
  height: 90vh;
  border-bottom-left-radius: 1.6em;
  border-bottom-right-radius: 1.6em;
  border-top-left-radius: 1.6em;
  border-top-right-radius: 1.6em;
  padding: 1.5em;
`;
