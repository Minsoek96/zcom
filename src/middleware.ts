import { NextResponse } from 'next/server';

import { auth } from './auth';

// eslint-disable-next-line consistent-return
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
  matcher: ['/messages'],
};

// 배포를 위한 임시 방편 nextAuth 버전 관련 오류라는데 msw를 서버형태로
// 실행하면 nextAuth가 통과하는 반면, 서비스워커 방식으로 사용하면
// nextAuth 관련 오류가 발생
// 백엔드를 사용하면 문제가 없는 사항
// 임시처리 :  인증 관련 페이지 해제
