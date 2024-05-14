'use client';

import styled from 'styled-components';

import { CircleIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import RadioCheck from '@/app/_components/ui/CheckBox';

import useThemeStorage from '@/app/_hooks/useThemeStorage';

import { ColorDataProps } from '@/app/_types/ColorType';

const colorData: ColorDataProps[] = [
  {
    id: 'blue01',
    mainColor: 'rgb(29, 155, 240)',
    subColor: 'rgb(142, 205, 248)',
    text: '하늘색',
  },
  {
    id: 'yellow02',
    mainColor: 'rgb(255, 212, 0)',
    subColor: 'rgb(255, 234, 128)',
    text: '노란색',
  },
  {
    id: 'pink03',
    mainColor: 'rgb(249, 24, 128)',
    subColor: 'rgb(252, 140, 192)',
    text: '분홍색',
  },
  {
    id: 'pupple04',
    mainColor: 'rgb(120, 86, 255)',
    subColor: 'rgb(188, 171, 255)',
    text: '보라색',
  },
  {
    id: 'orange05',
    mainColor: 'rgb(255, 122, 0)',
    subColor: 'rgb(255, 189, 128)',
    text: '주황색',
  },
  {
    id: 'green06',
    mainColor: 'rgb(0, 186, 124)',
    subColor: 'rgb(128, 221, 190)',
    text: '연두색',
  },
];

export default function ColorSettings() {
  const { color, handleChangeColor } = useThemeStorage();
  const { mainColor } = color;

  return (
    <Container>
      <h2>색상</h2>
      <SettingWrrapper>
        {colorData.map((theme) => (
          <ColorContainer $circleColor={theme.mainColor} key={theme.id}>
            <CircleIcon />
            <RadioCheck
              checked={mainColor === theme.mainColor}
              id={theme.id}
              onChange={() => {
                handleChangeColor(theme.mainColor, theme.subColor);
              }}
            />
          </ColorContainer>
        ))}
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

type SettingProps = {
  $circleColor: string;
};

const SettingWrrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: 1.4em;

  > p:last-child {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
  }
`;

const ColorContainer = styled.div<SettingProps>`
  svg {
    fill: ${(props) => props.$circleColor};
  }
`;
