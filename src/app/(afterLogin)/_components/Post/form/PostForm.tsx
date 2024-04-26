'use client';

import { useState } from 'react';

import styled from 'styled-components';

import { useSession } from 'next-auth/react';
import ImageLink from '../ImageLink';
import PostActionButtons from './PostActionButtons';
import ResizableTextarea from './ResizableTextarea';

function PostForm() {
  const [text, setText] = useState('');
  const { data: me } = useSession();

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
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <PostActionButtons />
      </div>
    </Container>
  );
}

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
