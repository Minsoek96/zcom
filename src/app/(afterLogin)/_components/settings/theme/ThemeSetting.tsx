'use client';

import styled from 'styled-components';

import ThemeMarker from './theme-marker/ThemeMarker';

import themeData from '../data/themeData';

export default function ThemeSetting() {
  return (
    <Container>
      <h2>배경</h2>
      <SettingWrrapper>
        {themeData.map((theme) => (
          <ThemeMarker key={theme.id} theme={theme} />
        ))}
      </SettingWrrapper>
    </Container>
  );
}

const Container = styled.div`
  font-size: 1rem;
  padding-inline: 1.1em;
  padding-block: 1.4em;
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

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
