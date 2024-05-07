'use client';

import { FontData } from '@/app/_types/FontType';
import styled from 'styled-components';
import { useFontStore } from '@/app/_store/useFontStore';
import FontMarker from './font-marker/FontMarker';

const fontData: FontData[] = [
  {
    id: 'sx-font',
    font: '매우작게',
    offset: 2,
    idx: 0,
  },
  {
    id: 'sm-font',
    font: '작게',
    offset: 27,
    idx: 1,
  },
  {
    id: 'm-font',
    font: '중간',
    offset: 52,
    idx: 2,
  },
  {
    id: 'l-font',
    font: '크게',
    offset: 77,
    idx: 3,
  },
  {
    id: 'xl-font',
    font: '매우크게',
    offset: 98,
    idx: 4,
  },
];

export default function FontSizeSetting() {
  const { fontSize, selectedOffset } = useFontStore();

  return (
    <Container $fontSize={fontSize}>
      <h2>글꼴 크기</h2>
      <SettingWrrapper>
        <p>Aa</p>
        <FontSliderContainer>
          <SliderProgress width={selectedOffset} />
          {fontData.map((item) => (
            <FontMarker key={item.id} item={item} />
          ))}
        </FontSliderContainer>
        <p>Aa</p>
      </SettingWrrapper>
    </Container>
  );
}

type Props = {
  $fontSize: string;
};

const Container = styled.div<Props>`
  font-size: ${(props) => (props.$fontSize === '중간' ? '1rem' : '2rem')};
  padding-inline: 1.1em;
  padding-block: 1.4em;
  border-bottom: 1px solid #eff3f4;
  width: 100%;
  > h2 {
    font-size: 1.8em;
    font-weight: 700;
  }
`;

const SettingWrrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: 1.4em;

  > p:last-child {
    font-size: 1.5rem;
  }
`;

const FontSliderContainer = styled.div`
  position: relative;
  width: 90%;
  height: 0.4rem;
  background-color:rgb(252, 140, 192);
`;

const SliderProgress = styled.div<{ width: number }>`
  position: absolute;
  height: 100%;
  background-color: #F91880;
  width: ${(props) => props.width}%;
`;
