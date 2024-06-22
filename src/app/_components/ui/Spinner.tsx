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
  gap: 1.2rem;
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
  border: 0.6rem solid ${(props) => props.theme.colors.subColor};
  border-radius: 50%;
  border-top: 0.6rem solid ${(props) => props.theme.colors.mainColor};
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1.2s linear infinite;
`;
