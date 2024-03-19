/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // SWC를 사용한 미니파이 활성화 (기본적으로 활성화됨)
  compiler: {
    // Styled Components의 SSR을 위한 SWC 플러그인 활성화
    styledComponents: true,
  },
};

export default nextConfig;
