import { styled } from 'styled-components';

import { useRouter } from 'next/navigation';
import ImageLink from '../Post/ImageLink';

function FollowRecList() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/@back');
  };

  const handleFollowClick = (e:React.MouseEvent) => {
    e.stopPropagation();
    console.log('팔로우 신청');
  };

  return (
    <Container onClick={handleClick}>
      <div>
        <ImageLink src="/default.PNG" id="logo" width={40} height={40} />
        <UserInfoContainer>
          <span>baek</span>
          <span>@back</span>
        </UserInfoContainer>
      </div>
      <div>
        <button type="button" onClick={handleFollowClick}>팔로우</button>
      </div>
    </Container>
  );
}

export default FollowRecList;

const Container = styled.div`
  cursor: pointer;
  padding-block: 11px;
  display: flex;
  justify-content: center;

  > div:first-child {
    display: flex;
    flex: 1;
  }

  > div:last-child {
    display: flex;
    width: 71px;
  }

  button {
    cursor: pointer;
    border: none;
    width: 100%;
    color: white;
    background: black;
    font-size: 14px;
    font-weight: 700;
    height: 32px;
    border-radius: 16px;
  }

  &:hover {
    background-color: rgba(0,0,0,0.03);
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 15px;

  > span:first-child {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
  }

  > span:last-child {
    color: #536471;
    font-size: 13px;
    line-height: 16px;
  }
`;
