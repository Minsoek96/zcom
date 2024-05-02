'use client';

import Link from 'next/link';

import { styled } from 'styled-components';

export default function NotFoundPost() {
  return (
    <Container
      style={{
        width: '598px',
        height: '232px',
        paddingBlock: '38px',
        paddingInline: '11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontSize: '14px',
          color: '#536471',
        }}
      >
        이 페이지는 존재하지 않습니다.다른 페이지를 검색해보세요
      </p>
      <Link href="/explore">검색</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 598px;
  height: 232px;
  padding-block: 38px;
  padding-inline: 11px;

  > p {
    font-size: 14px;
    color: "#536471";
    margin-bottom: 27px;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 34px;
    padding-inline: 11px;
    background-color: #1D9BF5;
    border-radius: 9999px;
    color: white;
    font-weight: 700;
  }
`;
