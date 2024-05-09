'use client';

import { styled } from 'styled-components';

export default function Guide() {
  return (
    <Container>
      <span>
        글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든
        X계정에 적용됩니다.
      </span>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1rem;
  padding-inline: 1.1em;
  padding-block: 1.4em;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  > span {
    font-size: 1.2rem;
    color: #536471;
  }

`;
