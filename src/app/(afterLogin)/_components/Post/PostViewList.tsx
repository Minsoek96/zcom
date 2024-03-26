import { styled } from 'styled-components';

import Link from 'next/link';

import formatTimeFromNow from '@/app/_utils/day';
import ImageLink from './ImageLink';
import UserActionButtons from './UserActionButtons';

function PostViewList() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content:
      '비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 비트코인 떡상 ',
    createdAt: new Date(),
    Images: [],
  };

  return (
    <Container>
      <PostWrapper>
        <div>
          <ImageLink src="/default.png" id="img" width={40} height={40} />
        </div>
        <div>
          <UserInfoContainer>
            <Link href={`${target.User.id}`}>
              <span>{target.User.nickname}</span>
            </Link>
            {' '}
            <span>
              @
              {target.User.id}
            </span>
            {' · '}
            <span>{formatTimeFromNow({ createdAt: target.createdAt })}</span>
          </UserInfoContainer>
          <div>{target.content}</div>
          <UserActionButtons />
        </div>
      </PostWrapper>
    </Container>
  );
}

export default PostViewList;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  //TODO : 아이템 추가시 스타일조정
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.03);
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
