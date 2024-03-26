import Link from 'next/link';

import { NextPage } from 'next';

// eslint-disable-next-line react/function-component-definition
const NotFound: NextPage = () => (
  <div>
    <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
    <Link href="/search">검색</Link>
  </div>
);

export default NotFound;
