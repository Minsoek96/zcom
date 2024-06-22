'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1.2);
`;

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  img {
    object-fit: contain;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  padding-right: 1em;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.themeColor};

  @media screen and (max-width: 1050px){
    display: none;
  }
`;
