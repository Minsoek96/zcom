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
  align-items: center;
  justify-content: space-between;
  padding: 1.2em;
  cursor: pointer;

  div:first-child {
    display: flex;
  }

  > div:last-child {
    display: flex;

    svg{
      fill: ${(props) => props.theme.colors.mainFont};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverEffect};
    border-radius: 9999px;
  }

  @media screen and (max-width: 1300px) {
    > div:last-child {
      display: none;
    }
  }
`;

const UserInfo = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  padding-inline: 0.5em;

  > div:last-child {
    color: ${(props) => props.theme.colors.secondFont}
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
