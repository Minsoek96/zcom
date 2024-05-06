'use client';

import { ThemeProvider, styled } from 'styled-components';

import SideBar from './_components/layout/sidebar/SideBar';
import RightSideSection from './_components/layout/rightSideSection/RightSideSection';
import RQProvider from '../_components/RQProvider';
import defaultTheme from '../_styles/defaultTheme';

function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <SideWrraper>
          <SideSection>
            <SideBar />
          </SideSection>
        </SideWrraper>

        <RQProvider>
          <RightSectionWrraper>
            <RightSectionInner>
              <MainWrraper>{children}</MainWrraper>
              <RightSection>
                <RightSideSection />
              </RightSection>
            </RightSectionInner>
          </RightSectionWrraper>
          {modal}
        </RQProvider>
      </Container>
    </ThemeProvider>
  );
}

export default AfterLoginLayout;

const Container = styled.div`
  display: flex;
  background-color: #fff;
`;

const SideWrraper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex-grow: 1;
`;

const SideSection = styled.section`
  width: 27.5rem;
  height: 100dvh;

  @media screen and (max-width: 1300px) {
    width: 7.5rem;
  }
`;

const RightSectionWrraper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
`;

const RightSectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100dvh;
  width: 100rem;
`;

// TODO:: 자식의 정적인 크기
const MainWrraper = styled.main`
  width: 60rem;
  height: 200dvh;
  border: 1px solid #eff3f4;
  @media screen and (max-width: 650px) {
    display: flex;
  }
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100dvh;
`;
