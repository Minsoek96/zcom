'use client';

import { styled } from 'styled-components';

import SideBar from './_components/layout/sidebar/SideBar';
import RightSideSection from './_components/layout/rightSideSection/RightSideSection';
import RQProvider from '../_components/RQProvider';

function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
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
  );
}

export default AfterLoginLayout;

const Container = styled.div`
  display: flex;
  height: 100dvh;
  overflow: auto;
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
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const RightSectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100rem;

  @media screen and (max-width: 1350px) {
    width: 100%;
  }
`;

// TODO:: 자식의 정적인 크기
const MainWrraper = styled.main`
  width: 60rem;
  height: 100dvh;
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  border-left: 1px solid ${(props) => props.theme.colors.borderColor};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100dvh;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
