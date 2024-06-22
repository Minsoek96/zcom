'use client';

import styled, { keyframes } from 'styled-components';

function Spinner({
  message = '',
}: {
  message?: string;
}) {
  return (
    <SpinnerWrapper>
      <p>{message}</p>
      <SpinnerImg />
    </SpinnerWrapper>
  );
}

export default Spinner;
const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerImg = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 6px solid ${(props) => props.theme.colors.mainColor};
  width: 50px;
  height: 50px;
  animation: ${spin} 1.2s linear infinite;
`;
