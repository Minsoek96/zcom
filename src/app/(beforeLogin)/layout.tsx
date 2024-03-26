'use client';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width: 100dvw;
    height: 100dvh;
`;

function Layout({ children, modal }: {children: React.ReactNode, modal: React.ReactNode}) {
  return (
    <Container>
      {children}
      {modal}
    </Container>
  );
}

export default Layout;
