'use client';

import { useThemeStore } from '@/app/_store/useThemeStore';
import { ThemeDataProps, ThemeType } from '@/app/_types/ThemeType';
import styled from 'styled-components';

const themeData:ThemeDataProps[] = [
  {
    id: 'defaultTheme',
    color: 'rgb(255, 255, 255)',
    text: '기본',
    checked: false,
  },
  {
    id: 'darkTheme',
    color: 'rgb(21, 32, 43)',
    text: '어둡게',
    checked: false,
  },
  {
    id: 'deepDarkTheme',
    color: 'rgb(0, 0, 0)',
    text: '완전히 어둡게',
    checked: false,
  },
];

export default function ThemeSetting() {
  const { setTheme } = useThemeStore();

  const handleChange = (type: ThemeType) => {
    setTheme(type);
  };

  // TODO : 인풋 라디오 컴포넌트화 생각하기 (update 반영)

  return (
    <Container>
      <h2>배경</h2>
      <SettingWrrapper>
        {themeData.map((theme) => (
          <ThemeContainer
            $backColor={theme.color}
            $isSelected={theme.checked}
            key={theme.id}
          >
            <input
              type="radio"
              defaultChecked={theme.checked}
              checked={theme.checked}
              onChange={() => handleChange(theme.id)}
            />
            <span>{theme.text}</span>
          </ThemeContainer>
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
  $backColor: string;
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
    flex-direction: column;
  }
`;

const ThemeContainer = styled.div<SettingProps>`
  font-size: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  background-color: ${(props) => props.$backColor};
  color: ${(props) => (props.$backColor === 'rgb(255, 255, 255)' ? 'black' : 'white')};
  border: ${(props) => (props.$isSelected ? '1px solid red' : 'none')};
  padding-inline: 2em;
  margin: 0.4rem;
  min-height: 6.4rem;
  border-radius: 4px;

  > span {
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.font.baseWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 80%;
  }
`;
