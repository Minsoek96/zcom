'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import PostBtn from '@/app/_components/ui/PostBtn';
import { LogoIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import NavMenuList from './NavMenuList';
import Profile from './Profile';

function SideBar() {
  const router = useRouter();

  const handleOpenPost = () => {
    router.push('/compose/tweet');
  };

  return (
    <SideBarContainer>
      <div>
        <Link href="/home">
          <Logo>
            <LogoIcon />
          </Logo>
        </Link>
        <NavMenuList />
        <PostBtn onClick={handleOpenPost} name="게시하기" media />
      </div>
      <Profile />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.section`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 1.1em;
  position: fixed;
  height: 100vh;
  width: inherit;
`;

const Logo = styled.div`
  position: relative;
  left: -.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.6rem;
  width: 5.6rem;
  padding: 1em;
  margin-top: .2rem;

  svg {
    fill: ${(props) => props.theme.colors.mainFont};
  }

  img {
    aspect-ratio: 1 / 1;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverEffect};
    border-radius: 9999px;
  }
`;
