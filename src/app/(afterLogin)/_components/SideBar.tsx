"use client";
import { styled } from "styled-components";

const NavMenuContainer = styled.ul`
  li {
    display: flex;
    padding-block: 4px;
    cursor: pointer;
  }
  li:hover {
    background-color:rgba(15, 20, 25, 0.1);
    border-radius: 20px;
    width: 50%;
  }
  span {
    padding: 11px;
    align-items: center;
    font-size: 18px;
  }
`;

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <li>
        <div>
          <svg
            width={26}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
          >
            <g>
              <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
            </g>
          </svg>
        </div>
        <div>
          <span>탐색하기</span>
        </div>
      </li>
    </NavMenuContainer>
  );
};

const Profile = () => {
  return (
    <div>
      <button>로그아웃</button>
    </div>
  );
};

const SideBar = () => {
  return (
    <SideBarContainer>
      <NavMenu />
      <Profile />
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 275px;
  background-color: green;
  height: 100dvh;
`;
