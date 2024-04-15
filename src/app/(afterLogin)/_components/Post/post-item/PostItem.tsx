'use client';

import { styled } from 'styled-components';

import Link from 'next/link';

import formatTimeFromNow from '@/app/_utils/day';

import { Post } from '@/app/_types/Post';

import UserActionButtons from './UserActionButtons';
import PostImages from './PostImages';
import ImageLink from '../ImageLink';
import PostArticle from './PostArticle';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const { id, nickname } = post.User;
  return (
    <PostArticle post={post}>
      <Container>
        <PostWrapper>
          <div>
            <ImageLink src={post.User.image} id="img" width={40} height={40} />
          </div>
          <div>
            <UserInfoContainer>
              <Link href={`${id}`}>
                <span>{nickname}</span>
              </Link>
              {' '}
              <span>
                @
                {post.User.id}
              </span>
              {' · '}
              <span>{formatTimeFromNow({ createdAt: post.createdAt })}</span>
            </UserInfoContainer>
            <div>
              {post.Images && <PostImages post={post} />}
              {post.content}
            </div>
            <UserActionButtons />
          </div>
        </PostWrapper>
      </Container>
    </PostArticle>
  );
}

export default PostItem;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  //TODO : 아이템 추가시 스타일조정
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    transition: background-color 0.2s ease;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  padding-inline: 15px;
  padding-block: 11px;
  border-bottom: 1px solid #eff3f4;
  width: 100%;

  > div:first-child {
    width: 40px;
  }

  > div:last-child {
    width: 100%;
    > div {
      padding-inline: 12px;
    }

    > div:last-child {
      padding-inline: 0;
    }
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
