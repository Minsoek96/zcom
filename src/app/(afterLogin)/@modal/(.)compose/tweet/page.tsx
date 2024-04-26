'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import ImageLink from '@/app/(afterLogin)/_components/post/ImageLink';
import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import PostActionButtons from '@/app/(afterLogin)/_components/post/form/PostActionButtons';
import ResizableTextarea from '@/app/(afterLogin)/_components/post/form/ResizableTextarea';
import { useSession } from 'next-auth/react';

function Tweet() {
  const router = useRouter();
  const [text, setText] = useState('');
  const { data: me } = useSession();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container>
      <ModalContainer>
        <div onClick={handleBack}><CloseIcon /></div>
        <div>
          <ImageLink
            src={me?.user?.image as string}
            id={me?.user?.id as string}
            width={40}
            height={40}
          />
          <ResizableTextarea
            text={text}
            setText={setText}
            placeholder="무슨 일이 일어나고 있나요?"
          />
        </div>
        <PostActionButtons />
      </ModalContainer>
    </Container>
  );
}

export default Tweet;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 5%;
  background-color: white;
  width: 600px;
  min-height: 300px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 15px;

  > div:first-child {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: 32px;
    height: 32px;
    &:hover {
      background-color: rgba(15,20,25, 0.1);
    }
  }

  > div:nth-child(2) {
    display: flex;
    width: 100%;
    padding: 11px;
    min-height: 250px;
    height: auto;
  }

  > div:last-child {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;
