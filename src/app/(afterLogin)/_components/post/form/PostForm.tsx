'use client';

import { useState } from 'react';

import { useSession } from 'next-auth/react';

import styled from 'styled-components';

import useMediaStateStore from '@/app/_store/useMediaStateStore';

import ImageLink from '../ImageLink';
import PostActionButtons from './PostActionButtons';
import ResizableTextarea from './ResizableTextarea';
import ImagePreviewsViewer from './image-preview/ImagePreviewsViewer';

function PostForm() {
  const { data: me } = useSession();
  const { imagePreviews, setImagePreviews } = useMediaStateStore();
  const [text, setText] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newFile = event.target?.result as string;
          if (event.target?.result) {
            setImagePreviews((prevPreviews) => [...prevPreviews, newFile]);
          }
        };

        // reader.onerror = (e) => {
        //   console.error(
        //     `File could not be read! Code ${e.target?.error?.code}`,
        //   );
        // };// 에러처리
        reader.readAsDataURL(file);
      });
    }
  };

  // TODO:: 이미지 업로드 폼 만들기
  // TODO:: 포스트 작성 상태 관리 고민 하기(zustand?, state?)
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
        {!!imagePreviews.length && <ImagePreviewsViewer />}
        <PostActionButtons handleImageUpload={handleImageUpload} />
      </div>
    </Container>
  );
}

export default PostForm;

const Container = styled.div`
  display: flex;
  margin-top: 21px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  padding-bottom: 0.5em;

  > div:first-child {
    width: 40px;
  }

  > div:last-child {
    width: 100%;

    > div:last-child {
      margin-top: 3rem;
      padding-top: 0.5em;
      border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    }
  }
`;
