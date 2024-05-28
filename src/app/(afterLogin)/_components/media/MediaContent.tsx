'use client';

import { useCallback, useState } from 'react';

import { styled } from 'styled-components';

import Header from '@/app/_components/ui/Header';

import useMediaStateStore from '@/app/_store/useMediaStateStore';
import key from '@/app/_utils/key';

import { TabType } from '@/app/_types/MediaType';

import { useRouter } from 'next/navigation';
import useZoomableMultiCut from '@/app/_hooks/useZoomableMultiCut';
import ZoomableImageViewer from './zoomable-image/ZoomableImageViewer';

import TabItem from './tab-item/TabItem';
import { mediaTabs } from './data';
import MediaNaviagation from './MediaNavigation';

export default function MediaContent() {
  const router = useRouter();
  const { imagePreviews, seletedImage } = useMediaStateStore();
  const [tabType, setTabType] = useState<TabType>('cut');
  const [mediaNum, setMediaNum] = useState<number>(seletedImage);
  const { saveEditedMedia } = useZoomableMultiCut();

  const handleChangeType = (type: TabType) => {
    setTabType(type);
  };

  const handlePrevClick = useCallback(() => {
    setMediaNum((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  const handleNextClick = useCallback(() => {
    setMediaNum((prev) => (prev === imagePreviews.length - 1 ? prev : prev + 1));
  }, [imagePreviews.length]);

  const handleSaveClick = () => {
    saveEditedMedia();
    router.back();
  };

  return (
    <Container>
      <Header
        mainText="미디어 자르기"
        action={{
          createElements: (
            <MediaNaviagation
              onPreClick={handlePrevClick}
              onNextClick={handleNextClick}
              onSaveClick={handleSaveClick}
              text="저장"
            />
          ),
        }}
      />
      <MediaTabContainer>
        {mediaTabs.map((tab) => (
          <TabItem
            key={tab.id}
            tab={tab}
            isSeleted={tabType === tab.type}
            onClick={handleChangeType}
          />
        ))}
      </MediaTabContainer>
      <MediaCutContainer>
        {imagePreviews.map((image, index) => (
          <ZoomableImageViewer
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

const MediaTabContainer = styled.div`
  display: flex;
  height: 5.3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;

const MediaCutContainer = styled.div``;
