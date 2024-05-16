'use client';

import { useState } from 'react';

import { useSession } from 'next-auth/react';

import styled from 'styled-components';

import usePostStateStore from '@/app/_store/usePostStateStore';

import ImageLink from '../ImageLink';
import PostActionButtons from './PostActionButtons';
import ResizableTextarea from './ResizableTextarea';
import ImagePreview from './image-preview/ImagePreivew';

function PostForm() {
  const { data: me } = useSession();
  const { imagePreviews, setImageFiles, setImagePreviews } = usePostStateStore();
  const [text, setText] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const fileArray = Array.from(files);
      const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
      const makePreview = [...imagePreviews, ...imageUrls];
      setImageFiles(fileArray);
      setImagePreviews(makePreview);
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
        {!!imagePreviews.length && <ImagePreview />}
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
