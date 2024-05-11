'use client';

import styled from 'styled-components';

import { useFontStore } from '@/app/_store/useFontStore';

import FontMarker from './font-marker/FontMarker';

import fontData from './fontdata';

export default function FontSizeSetting() {
  const { fontOption } = useFontStore();

  return (
    <Container>
      <h2>글꼴 크기</h2>
      <SettingWrrapper>
        <p>Aa</p>
        <FontSliderContainer>
          <SliderProgress width={fontOption.offset} />
          {fontData.map((item) => (
            <FontMarker key={item.id} item={item} />
          ))}
        </FontSliderContainer>
        <p>Aa</p>
      </SettingWrrapper>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1rem;
  padding-inline: 1.1em;
  padding-block: 1.4em;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
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
