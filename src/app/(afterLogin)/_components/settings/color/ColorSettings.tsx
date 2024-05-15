'use client';

import styled from 'styled-components';

import ColorMarker from './color-marker/ColorMarker';

import colorData from '../data/colorData';

export default function ColorSettings() {
  return (
    <Container>
      <h2>색상</h2>
      <SettingWrrapper>
        {colorData.map((theme) => (
          <ColorMarker key={theme.id} theme={theme} />
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
