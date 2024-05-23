'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import PostActionButtons from '@/app/(afterLogin)/_components/post/form/PostActionButtons';
import ResizableTextarea from '@/app/(afterLogin)/_components/post/form/ResizableTextarea';
import ImageLink from '@/app/(afterLogin)/_components/post/ImageLink';

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
  background-color: ${(props) => props.theme.colors.overlay};
`;

const ModalContainer = styled.div`
  font-size: 1rem;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 5%;
  background-color: ${(props) => props.theme.colors.themeColor};
  width: 60rem;
  min-height: 30rem;
  border-bottom-left-radius: 1.6em;
  border-bottom-right-radius: 1.6em;
  border-top-left-radius: 1.6em;
  border-top-right-radius: 1.6em;
  padding: 1.5em;
  z-index: 1000;

  > div:first-child {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    width: 3.2rem;
    height: 3.2rem;

    svg {
      fill: ${(props) => props.theme.colors.mainFont};
    }
    &:hover {
      background-color: rgba(15,20,25, 0.1);
    }
  }

  > div:nth-child(2) {
    display: flex;
    width: 100%;
    padding: 1.1em;
    min-height: 25rem;
    height: auto;
  }

  > div:last-child {
    position: relative;
    bottom: 0;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    padding-top: 1rem;
  }
`;
