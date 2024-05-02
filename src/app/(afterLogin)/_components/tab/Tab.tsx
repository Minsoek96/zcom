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
  height: 50px;
`;

const FixedContainer = styled.div<{ $currentTab: string }>`
  width: 597px;
  vertical-align: 1px;
  display: flex;
  position: fixed;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  backdrop-filter: blur(12px);

  > div  {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    padding: 15px;
    border-bottom: 1px solid #eff3f4;
  }

  > div:first-child {
    border-right: 1px solid #eff3f4;;
    font-weight: ${(props) => (props.$currentTab === 'recommend' ? '700' : '0')};


    div {
      position: absolute;
      bottom: 0;
      background-color: ${(props) => (props.$currentTab === 'recommend' ? 'rgb(29, 155, 240)' : 'none')};
      width: 56px;
      height: 4px;
    }
  }

  > div:last-child {
    font-weight: ${(props) => (props.$currentTab === 'recommend' ? '0' : '700')};

    div {
      position: absolute;
      bottom: 0;
      background-color: ${(props) => (props.$currentTab === 'recommend' ? 'none' : 'rgb(29, 155, 240)')};
      width: 56px;
      height: 4px;
    }
  }

  @media screen and (max-width: 650px){
    width: 440px;
  }
`;
