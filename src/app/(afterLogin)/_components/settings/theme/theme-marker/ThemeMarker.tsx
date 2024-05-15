import styled from 'styled-components';

import RadioCheck from '@/app/_components/ui/CheckBox';

import useThemeStorage from '@/app/_hooks/useThemeStorage';

import { ThemeDataProps } from '@/app/_types/ThemeType';

type ThemeMarkerProps = {
    theme: ThemeDataProps
}
export default function ThemeMarker({ theme }:ThemeMarkerProps) {
  const { handleChangeTheme, theme: themeType } = useThemeStorage();

  return (
    <ThemeContainer
      $backColor={theme.color}
      $isSelected={themeType === theme.id}
      key={theme.id}
    >
      <RadioCheck
        checked={themeType === theme.id}
        id={theme.id}
        onChange={() => handleChangeTheme(theme.id)}
      />
      <span>{theme.text}</span>
    </ThemeContainer>
  );
}

type SettingProps = {
    $backColor: string;
    $isSelected: boolean;
  };

const ThemeContainer = styled.div<SettingProps>`
    font-size: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    background-color: ${(props) => props.$backColor};
    color: ${(props) => (props.$backColor === 'rgb(255, 255, 255)' ? 'black' : 'white')};
    border: ${(props) => (props.$isSelected && `1px solid ${props.theme.colors.mainColor}`)};
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
