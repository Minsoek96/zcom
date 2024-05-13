'use client';

import { CircleIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

import styled from 'styled-components';

const colorData = [
  {
    id: 'blue01',
    color: 'rgb(29, 155, 240)',
    checked: false,
  },
  {
    id: 'yellow02',
    color: 'rgb(255, 212, 0)',
    checked: false,
  },
  {
    id: 'pink03',
    color: 'rgb(249, 24, 128)',
    checked: false,
  },
  {
    id: 'pupple04',
    color: 'rgb(120, 86, 255)',
    checked: false,
  },
  {
    id: 'orange05',
    color: 'rgb(255, 122, 0)',
    checked: false,
  },
  {
    id: 'green06',
    color: 'rgb(0, 186, 124)',
    checked: false,
  },
];

export default function ColorSettings() {
  // TODO : 인풋 라디오 컴포넌트화 생각하기 (update 반영)

  return (
    <Container>
      <h2>색상</h2>
      <SettingWrrapper>
        {colorData.map((theme) => (
          <ColorContainer
            $circleColor={theme.color}
            $isSelected={theme.checked}
            key={theme.id}
          >
            <CircleIcon />
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
  $isSelected: boolean;
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

  @media screen and (max-width: 600px){
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
