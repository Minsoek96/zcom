'use client';

import { styled } from 'styled-components';

import { useTabStore } from '@/app/_store/useTabStore';

function Tab() {
  const { tab, setTab } = useTabStore();

  return (
    <TabContainer>
      <FixedContainer $currentTab={tab}>
        <div onClick={() => setTab('recommend')}>
          추천
          <div />
        </div>
        <div onClick={() => setTab('follow')}>
          팔로우 중
          <div />
        </div>
      </FixedContainer>
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div`
  height: 5rem;
`;

const FixedContainer = styled.div<{ $currentTab: string }>`
  width: 59.7rem;
  vertical-align: 1px;
  display: flex;
  position: fixed;
  font-size: 1.4rem;
  line-height: 1.35em;
  text-align: center;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.85);
  color: #536472;
  z-index: 10;

  > div  {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    padding: 1em;
    border-bottom: 1px solid #eff3f4;
  }

  > div:first-child {
    border-right: 1px solid #eff3f4;;
    font-weight: ${(props) => (props.$currentTab === 'recommend' ? '700' : '0')};

    color: ${(props) => props.$currentTab === 'recommend' && '#000'};


    div {
      position: absolute;
      bottom: 0;
      background-color: ${(props) => (props.$currentTab === 'recommend' ? 'rgb(29, 155, 240)' : 'none')};
      width: 5.6rem;
      height: 0.4rem;
    }
  }

  > div:last-child {
    font-weight: ${(props) => (props.$currentTab === 'recommend' ? '0' : '700')};

    color: ${(props) => props.$currentTab === 'follow' && '#000'};

    div {
      position: absolute;
      bottom: 0;
      background-color: ${(props) => (props.$currentTab === 'recommend' ? 'none' : 'rgb(29, 155, 240)')};
      width: 5.6rem;
      height: 0.4rem;
    }
  }

  @media screen and (max-width: 650px){
    width: 44rem;
  }
`;
