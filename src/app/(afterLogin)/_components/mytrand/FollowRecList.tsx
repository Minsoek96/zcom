import { styled } from 'styled-components';

import useFetchFollowRecommends from '@/app/_hooks/useFetchFollowRecommends';

import FollowRecItem from './FollowRecItem';

function FollowRecList() {
  const { recommends } = useFetchFollowRecommends();

  return (
    <Container>
      <div><span>팔로우 추천</span></div>
      {recommends?.map((user) => (
        <FollowRecItem key={user.id} user={user} />
      ))}
    </Container>
  );
}

export default FollowRecList;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  margin-block: 1.5rem;

  > div span {
    font-weight: 800;
    font-size: 2rem;
  }

  > div {
    padding-block: 1.2em;
    padding-inline: 1.6em;
  }

  > div:last-child {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;
