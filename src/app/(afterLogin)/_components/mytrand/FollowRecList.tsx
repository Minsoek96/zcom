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
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: RGB(247, 249, 249);
  margin-block: 15px;
  padding-block: 11px;
  > * {
    padding-inline: 15px;
  }

  > span {
    font-weight: 800;
    font-size: 19px;
    margin-bottom: 15px;
  }
`;
