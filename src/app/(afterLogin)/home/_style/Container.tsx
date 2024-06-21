'use client';

import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child ~ div {
    padding-inline: 0.95em;
  }
`;

export default Container;
