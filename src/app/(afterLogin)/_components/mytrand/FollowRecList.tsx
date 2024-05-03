import { styled } from 'styled-components';

import useFetchFollowRecommends from '@/app/_hooks/useFetchFollowRecommends';

import FollowRecItem from './FollowRecItem';

function FollowRecList() {
  const { recommends } = useFetchFollowRecommends();

  return (
    <Container>
      <span>팔로우 추천</span>
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
  background-color: RGB(247, 249, 249);
  margin-block: 1.5rem;
  padding-block: 1.1em;
  padding-inline: 1.5em;

  > span {
    font-weight: 800;
    font-size: 1.9rem;
    margin-bottom: 1.5rem;
  }
`;
