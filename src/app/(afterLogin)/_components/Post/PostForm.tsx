import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import MyImage from "./MyImage";
import ActionButtons from "./ActionButtons";

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
        <Link href={target.User.id}>
          <MyImage
            src={target.User.image}
            alt={target.User.id}
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div>
        <StyledTextarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <ActionButtons/>
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

  a > img {
    border-radius: 9999px;
  }

  > div:first-child {
    width: 40px;
  }

  > div:last-child {
    width: 100%;
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
