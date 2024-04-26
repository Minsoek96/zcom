'use client';

import { useState } from 'react';

import styled from 'styled-components';

import { useSession } from 'next-auth/react';
import ImageLink from '../../post/ImageLink';
import ResizableTextarea from '../../post/form/ResizableTextarea';
import PostActionButtons from '../../post/form/PostActionButtons';

function CommentForm() {
  const { data: me } = useSession();
  const [text, setText] = useState('');

  return (
    <Container>
      <div>
        <ImageLink
          src={me?.user?.image as string}
          id={me?.user?.id as string}
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
