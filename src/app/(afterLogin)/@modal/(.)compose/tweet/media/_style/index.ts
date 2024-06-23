'use client';

import { styled } from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.overlay};
`;

export const ModalContainer = styled.div`
  z-index: 15;
  font-size: 1rem;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 5%;
  background-color: ${(props) => props.theme.colors.themeColor};
  max-height: calc(96rem);
  height: 83rem;
  border-bottom-left-radius: 1.6em;
  border-bottom-right-radius: 1.6em;
  border-top-left-radius: 1.6em;
  border-top-right-radius: 1.6em;
  padding-inline: 1.5em;

  @media screen and (max-width: 700px){
    width: 100%;
    height: 100%;
    top: 0%;
  }
`;
