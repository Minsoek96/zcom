'use client';

import styled from 'styled-components';

import { useRouter } from 'next/navigation';

import { signOut, useSession } from 'next-auth/react';

import { MoreIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import ImageLink from '../../post/ImageLink';

function Profile() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogOut = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if (!me?.user) {
    return null;
  }

  // TODO: ME 아이콘 교체
  return (
    <Container>
      <div onClick={onLogOut}>
        <ImageLink src={me.user.image || ''} id="logo" width={36} height={36} />
        <UserInfo>
          <div>{me.user?.name}</div>
          <div>{me.user?.email}</div>
        </UserInfo>
      </div>
      <div>
        <MoreIcon />
      </div>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.1em;
  cursor: pointer;

  div:first-child {
    display: flex;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: RGB(231, 231, 232);
    border-radius: 21px;
  }

  @media screen and (max-width: 1300px) {
  }
`;

const UserInfo = styled.div`
  font-size: 1.6rem;
  display: block;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
