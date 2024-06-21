'use client';

import styled from 'styled-components';

import Link from 'next/link';

import formatTimeFromNow from '@/app/_utils/day';

import { Post } from '@/app/_types/Post';

import UserActionButtons from './UserActionButtons';
import PostImages from './PostImages';
import ImageLink from '../ImageLink';
import PostArticle from './PostArticle';

type PostItemProps = {
  post: Post;
  isPhoto?: boolean;
};

function PostItem({ post, isPhoto = true }: PostItemProps) {
  const { id, nickname } = post.User;
  return (
    <PostArticle post={post}>
      <Container onClick={(e) => e.stopPropagation()}>
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
              {post.content}
              {isPhoto && post.Images && <PostImages post={post} />}
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
  width: inherit;

  //TODO : 아이템 추가시 스타일조정
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.trendHover};
    transition: background-color 0.2s ease;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  padding-inline: 15px;
  padding-block: 11px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
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
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  > a > span:first-child {
    font-weight: 700;
  }

  > span:first-child ~ span {
    color: #536472;
  }
`;
