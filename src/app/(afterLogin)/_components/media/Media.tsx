import { useState } from 'react';

import { styled } from 'styled-components';

import Header from '@/app/_components/ui/Header';
import usePostStateStore from '@/app/_store/usePostStateStore';
import key from '@/app/_utils/key';
import { CutIcon, FlagIcon } from '../../_constants/MenuIcons';
import ZoomableImage from './ZoomableImage';
import TabItem from './tab-item/TabItem';

export type TabType = 'cut' | 'imageAlt' | 'content';

export type TabInfo = {
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
          <TabItem
            key={tab.id}
            tab={tab}
            isSeleted={tabType === tab.type}
            onClick={handleChangeType}
          />
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

const MediaCutContainer = styled.div``;
