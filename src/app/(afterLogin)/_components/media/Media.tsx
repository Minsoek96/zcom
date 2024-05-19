import { useState } from 'react';

import { styled } from 'styled-components';

import Header from '@/app/_components/ui/Header';
import usePostStateStore from '@/app/_store/usePostStateStore';
import key from '@/app/_utils/key';
import { CutIcon, FlagIcon } from '../../_constants/MenuIcons';
import ZoomableImage from './ZoomableImage';

type TabType = 'cut' | 'imageAlt' | 'content';

type TabInfo = {
  id: string;
  main: React.ReactNode;
  type: TabType;
};

const tabData: TabInfo[] = [
  {
    id: 'cut-01',
    main: <CutIcon />,
    type: 'cut',
  },
  {
    id: 'alt-02',
    main: <span>ALT</span>,
    type: 'imageAlt',
  },
  {
    id: 'content-03',
    main: <FlagIcon />,
    type: 'content',
  },
];

export default function Media() {
  const [tabType, setTabType] = useState<TabType>('cut');
  const { imagePreviews } = usePostStateStore();

  const handleChangeType = (type: TabType) => {
    setTabType(type);
  };

  return (
    <Container>
      <Header
        mainText="미디어 자르기"
        action={{ text: '저장', onClick: () => console.log('asdf') }}
      />
      <TabContainer>
        {tabData.map((tab) => (
          <TabWrrapper
            key={tab.id}
            onClick={() => handleChangeType(tab.type)}
            $isSeleted={tabType === tab.type}
          >
            {tab.main}
            <div />
          </TabWrrapper>
        ))}
      </TabContainer>
      <MediaCutContainer>
        {imagePreviews.map((image, index) => (
        //   <Image key={key(image, index)} alt="d" src={image} width={450} height={450} />
          <ZoomableImage key={key(image, index)} alt="imt" src={image} />
        ))}
      </MediaCutContainer>
    </Container>
  );
}

const Container = styled.div`
  > div:first-child {
    border: none;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 21px;
      padding-inline: 16px;
      margin-left: 12px;
      height: 3.2rem;
      cursor: pointer;
      font-weight: 700;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  height: 5.3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;

const TabWrrapper = styled.div<{ $isSeleted: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-inline: 1.6rem;

  margin-right: 1rem;

  > div:last-child {
    position: absolute;
    bottom: 1px;
    display: flex;
    background-color: ${(props) => props.$isSeleted && props.theme.colors.mainColor};
    height: 4px;
    width: 5.6rem;
  }

  svg {
    fill: ${(props) => (props.$isSeleted
    ? props.theme.colors.mainFont
    : props.theme.colors.secondFont)};
  }

  span {
    font-size: 1.5rem;
    color: ${(props) => (props.$isSeleted
    ? props.theme.colors.mainFont
    : props.theme.colors.secondFont)};
  }
`;

const MediaCutContainer = styled.div``;
