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
  display: flex;
  justify-content: flex-end;
  padding-block: 11px;
  padding-inline: 15px;
  height: 68px;
  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.17px;
    height: 32.17px;
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
  font-size: 14px;
  font-weight: 700;
  height: 32px;
  border-radius: 16px;
  padding-inline: 15px;
  margin-left: 15px;
`;
