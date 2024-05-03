'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import PostBtn from '@/app/_components/ui/PostBtn';
import NavMenuList from './NavMenuList';
import Profile from './Profile';

import Zlogo from '../../../../../../public/zlogo.png';

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
            <Image src={Zlogo} alt="z.com로고" width={40} height={40} />
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
  display: inline-block;
  height: 5.6rem;
  padding: .5em;
  margin-top: .2rem;

  img {
    aspect-ratio: 1 / 1;
  }

  :hover {
    background-color: RGB(231, 231, 232);
    border-radius: 2.1rem;
  }
`;
