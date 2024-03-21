import React from "react";
import { styled } from "styled-components";
import MyImage from "./MyImage";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Link from "next/link";
import UserActionButtons from "./UserActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const PostViewList = () => {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 ",
    createdAt: new Date(),
    Images: [],
  };

  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  return (
    <Container>
      <PostWrapper>
        <div>이미지asdf</div>
        <div>
          <UserInfoContainer>
            <Link href={`${target.User.id}`}>
              <span>{target.User.nickname}</span>
            </Link>{" "}
            <span>@{target.User.id}</span>
            {" · "}
            <span>{dayjs(target.createdAt).fromNow(true)}</span>
          </UserInfoContainer>
          <div>{target.content}</div>
          <UserActionButtons/>
        </div>
      </PostWrapper>
    </Container>
  );
};

export default PostViewList;

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const PostWrapper = styled.div`
  display: flex;
  padding-inline: 15px;
  padding-block: 11px;
  width: 100%;

  > div:first-child {
    width: 43px;
  }

  > div:last-child {
    width: 100%;
  }
`;

const UserInfoContainer = styled.div`
  font-size: 14px;
  margin-bottom: 2px;
  > a > span:first-child {
    font-weight: 700;
  }

  > span:first-child ~ span {
    color: #536472;
  }
`;
