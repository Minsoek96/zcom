import { styled } from 'styled-components';

import { useRouter } from 'next/navigation';
import { User } from '@/app/_types/User';
import ImageLink from '../post/ImageLink';

type FollowRecProps = {
  user: User,
}
function FollowRecItem({ user }:FollowRecProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${user.id}`);
  };

  const handleFollowClick = (e:React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Container onClick={handleClick}>
      <div>
        <ImageLink src={user.image} id="logo" width={40} height={40} />
        <UserInfoContainer>
          <span>{user.nickname}</span>
          <span>{user.id}</span>
        </UserInfoContainer>
      </div>
      <div>
        <button type="button" onClick={handleFollowClick}>팔로우</button>
      </div>
    </Container>
  );
}

export default FollowRecItem;

const Container = styled.div`
  font-size: 1rem;
  cursor: pointer;
  padding-block: 1.1em;
  display: flex;
  justify-content: center;

  > div:first-child {
    display: flex;
    flex: 1;
  }

  > div:last-child {
    display: flex;
    width: 7.1rem;
  }

  button {
    cursor: pointer;
    border: none;
    width: 100%;
    color: white;
    background: black;
    font-size: 1.4rem;
    font-weight: 700;
    height: 3rem;
    border-radius: 1.6rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.trendHover};
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1.5em;

  > span:first-child {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.0rem;
  }

  > span:last-child {
    color: ${(props) => props.theme.colors.secondFont};
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`;
