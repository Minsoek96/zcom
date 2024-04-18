'use client';

import { useState } from 'react';

import styled from 'styled-components';

import ImageLink from '../../post/ImageLink';
import ResizableTextarea from '../../post/form/ResizableTextarea';
import PostActionButtons from '../../post/form/PostActionButtons';

function CommentForm() {
  const [text, setText] = useState('');

  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [],
  }; // 임시

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
        <ResizableTextarea
          text={text}
          setText={setText}
          placeholder="답글 게시하기"
        />
        <PostActionButtons btnText="답글" />
      </div>
    </Container>
  );
}

export default CommentForm;

const Container = styled.div`
  display: flex;
  margin-top: 21px;
  border-bottom: 1px solid #eff3f4;
  padding-bottom: 15px;
  padding-inline: 15px;

  > div:first-child {
    width: 40px;
  }

  > div:last-child {
    width: 100%;
  }
`;
