'use client';

import { styled } from 'styled-components';

import useFetchUser from '@/app/_hooks/useFetchUser';

import Banner from './Banner';
import ImageLink from '../post/ImageLink';
import ProfilActionBtns from './ProfilActionBtns';
import NotUser from './NotUser';

type ProfilBodyProps = {
  username: string;
};
function ProfilBody({ username }: ProfilBodyProps) {
  const { user, error } = useFetchUser({ username });

  // TODO: 중복 스타일 제거 (배너, 이미지링크 처리)
  if (error) {
    return <NotUser />;
  }

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Banner />
      <ImageLink src={user?.image} id="logo" width={134} height={134} />
      <ProfilActionBtns />
      <div>
        <span>
          {6}
          팔로우 중
        </span>
        {' '}
        <span>
          {3000}
          팔로워
        </span>
      </div>
    </Container>
  );
}

export default ProfilBody;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 420px;

  > a:nth-child(2) {
    position: absolute;
    top: calc(50%);
    left: 15%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 650px) {
      img {
        width: 10rem;
        height: 10rem;
        left: 20%;
      }
    }
  }

  > div:last-child {
    position: absolute;
    bottom: 0;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 1rem;
    padding-bottom: 1.1em;
    padding-inline: 1.5em;
    > span {
      margin-right: 1.9rem;
      font-size: 1.3rem;
    }
  }
`;
