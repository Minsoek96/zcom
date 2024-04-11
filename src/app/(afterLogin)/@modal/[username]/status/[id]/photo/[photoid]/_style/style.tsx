'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
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
  background-color: rgba(0, 0, 0, 0.4);
`;

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
  background-color: aqua;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  width: 350px;
`;