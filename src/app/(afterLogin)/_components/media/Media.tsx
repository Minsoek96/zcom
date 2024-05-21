import { useState } from 'react';

import { styled } from 'styled-components';

import Header from '@/app/_components/ui/Header';

import useMediaStateStore from '@/app/_store/useMediaStateStore';
import key from '@/app/_utils/key';

import { TabInfo, TabType } from '@/app/_types/MediaType';

import ZoomableImage from './ZoomableImage';

import {
  CutIcon,
  FlagIcon,
  NextArrow,
  PreArrow,
} from '../../_constants/MenuIcons';
import TabItem from './tab-item/TabItem';

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

// TODO: 관심사 분리 & 구조 재조정
// TODO: 저장 버튼 액션 처리

export default function Media() {
  const { imagePreviews, seletedImage } = useMediaStateStore();
  const [tabType, setTabType] = useState<TabType>('cut');
  const [mediaNum, setMediaNum] = useState<number>(seletedImage);

  const handleChangeType = (type: TabType) => {
    setTabType(type);
  };

  return (
    <Container>
      <Header
        mainText="미디어 자르기"
        action={{
          node: (
            <div>
              <div
                onClick={() => setMediaNum((prev) => (prev === 0 ? prev : prev - 1))}
              >
                <PreArrow />
              </div>
              <div
                onClick={() => setMediaNum(
                  (prev) => (prev === imagePreviews.length - 1 ? prev : prev + 1),
                )}
              >
                <NextArrow />
              </div>
              <button type="button" onClick={() => console.log('d')}>
                저장
              </button>
            </div>
          ),
        }}
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
          <ZoomableImage
            key={key(image, index)}
            alt="imt"
            src={image}
            isSelectedMedia={mediaNum === index}
          />
        ))}
      </MediaCutContainer>
    </Container>
  );
}

const Container = styled.div`
  > div:first-child {
    border: none;
    padding: 0;

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
