import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import ImageLink from "./ImageLink";
import ButtonIcon from "@/app/_components/ui/ButtonIcon";
import { PictureIcon } from "../../_constants/MenuIcons";
import PostBtn from "../SideBar/PostBtn";

const PostForm = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [],
  }; //임시

  useEffect(() => {
    const adjustHeight = () => {
      if (!textareaRef.current) return;
      const textarea = textareaRef.current;
      textarea.style.height = "inherit";
      const newHeight = Math.min(textarea.scrollHeight, 500);
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = newHeight >= 500 ? "auto" : "hidden";
    };

    adjustHeight(); // 컴포넌트 마운트 시 높이 조절
  }, [text]);

  return (
    <Container>
      <div>
        <ImageLink
          src={target.User.image}
          id={target.User.id}
          width={40}
          height={40}
        />
      </div>
      <div>
        <StyledTextarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <Controller>
          <ButtonIcon
            icon={<PictureIcon />}
            hoverColor={["rgba(29, 155, 240, 0.1)", ""]}
          ></ButtonIcon>
          <PostBtn name={"게시하기"} onClick={() => console.log("d")} />
        </Controller>
      </div>
    </Container>
  );
};

export default PostForm;

const Container = styled.div`
  display: flex;
  margin-top: 21px;
  border-bottom: 1px solid #eff3f4;
  padding-bottom: 15px;

  > div:first-child {
    width: 40px;
  }

  > div:last-child {
    width: 100%;
  }
`;

const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    fill: rgb(26, 140, 216);
    width: 25px;
    height: 25px;
  }


  button:last-child {
    width: 94px;
    height: 36px;
    font-size: 15px;
    background-color: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: inherit;
  padding: 12px;
  border: none;
  border-radius: 4px;
  resize: none;
  max-height: 500px;
  height: auto;
  font-size: 19px;
  font-family: Malgun Gothic;
  &:focus {
    outline: none;
  }
`;
