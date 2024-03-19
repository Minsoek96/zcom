"use client";
import Link from "next/link";
import Image from "next/image";

import { styled } from "styled-components";

import NavMenuList from "./NavMenuList";
import PostBtn from "./PostBtn";
import Profile from "./Profile";

import Zlogo from ".././../../../../public/zlogo.png";

const SideBar = () => {
  const handleOpenPost = () => {};

  return (
    <SideBarContainer>
      <div>
        <Link href="/home">
          <Logo>
            <Image src={Zlogo} alt="z.com로고" width={40} height={40} />
          </Logo>
        </Link>
        <NavMenuList />
        <PostBtn onClick={handleOpenPost} name={"게시하기"} />
      </div>
      <Profile />
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
  width: inherit;
`;

const Logo = styled.div`
  display: inline-block;
  height: 56px;
  padding: 5px;
  margin-top: 2px;

  :hover {
    background-color: RGB(231, 231, 232);
    border-radius: 21px;
  }
`;
