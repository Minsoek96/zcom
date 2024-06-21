'use client';

import { styled } from 'styled-components';

import { useTabStore } from '@/app/_store/useTabStore';

function Tab() {
  const { tab, setTab } = useTabStore();

  return (
    <TabContainer>
      <FixedContainer>
        <RecommedTab $currentTab={tab} onClick={() => setTab('recommend')}>
          추천
          <div />
        </RecommedTab>
        <FollowingTab $currentTab={tab} onClick={() => setTab('follow')}>
          팔로우 중
          <div />
        </FollowingTab>
      </FixedContainer>
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div`
  height: 5rem;
`;

const FixedContainer = styled.div`
  width: 100%;
  vertical-align: 1px;
  display: flex;
  position: sticky;
  font-size: 1.4rem;
  line-height: 1.35em;
  text-align: center;
  backdrop-filter: blur(12px);
  color: ${(props) => props.theme.colors.secondFont};
  z-index: 10;
`;

const TabBase = styled.div<{ $currentTab: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  padding: 1em;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

  > div {
    position: absolute;
    bottom: 0;
    width: 5.6rem;
    height: 0.4rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverEffect};
  }
`;

const RecommedTab = styled(TabBase)`

  font-weight: ${(props) => (props.$currentTab === 'recommend' ? '700' : '0')};

  color: ${(props) => props.$currentTab === 'recommend' && props.theme.colors.mainFont};

  div {
    background-color: ${(props) => (props.$currentTab === 'recommend'
    ? props.theme.colors.mainColor
    : 'none')};
  }
`;

const FollowingTab = styled(TabBase)`
  font-weight: ${(props) => (props.$currentTab === 'recommend' ? '0' : '700')};

  color: ${(props) => props.$currentTab === 'follow' && props.theme.colors.mainFont};

  div {
    background-color: ${(props) => (props.$currentTab === 'recommend'
    ? 'none'
    : props.theme.colors.mainColor)};
  }
`;
