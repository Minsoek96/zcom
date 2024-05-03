'use client';

import { styled } from 'styled-components';

import { MessageIcon, PointIcon } from '../../_constants/MenuIcons';

function ProfilActionBtns() {
  return (
    <Container>
      <div>
        <PointIcon />
      </div>
      <div>
        <MessageIcon />
      </div>
      <FollowButton type="button">팔로우</FollowButton>
    </Container>
  );
}
export default ProfilActionBtns;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  padding-block: 1.1em;
  padding-inline: 1.5em;
  height: 6.8rem;
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.217rem;
    height: 3.21rem;
    border-radius: 9999px;
    border: 1px solid rgba(15, 20, 25, 0.1);
    margin-left: 15px;
  }
  svg {
    width: 19px;
  }
`;

const FollowButton = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  border: 1px solid rgba(15, 20, 25, 0.1);
  background-color: white;
  width: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  height: 3.2rem;
  border-radius: 1.6rem;
  padding-inline: 1.1em;
  margin-left: 1.5rem;
`;
