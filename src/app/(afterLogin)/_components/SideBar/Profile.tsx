'use client';

import styled from 'styled-components';

import { useRouter } from 'next/navigation';

import { signOut, useSession } from 'next-auth/react';

import { MeIcon } from '../../_constants/MenuIcons';

function Profile() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogOut = () => {
    signOut({ redirect: false })
      .then(() => {
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
        <MeIcon />
        <div>
          <div>{me?.user?.name}</div>
          <div>{me?.user?.email}</div>
        </div>
      </div>
      <div>...</div>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 11px;
  cursor: pointer;

  div:first-child {
    display: flex;
  }

  &:hover {
    background-color: RGB(231, 231, 232);
    border-radius: 21px;
  }
`;
