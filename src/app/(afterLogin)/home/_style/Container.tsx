'use client';

import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200dvh;
  border: 1px solid #eff3f4;

  >div:first-child ~ div {
    padding-inline: 15px;
  }
`;

export default Container;
