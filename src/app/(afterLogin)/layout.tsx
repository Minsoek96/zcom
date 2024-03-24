"use client";
import { styled } from "styled-components";

import SideBar from "./_components/SideBar/SideBar";
import SearchForm from "./_components/SearchForm";
import MyTrand from "./_components/mytrand/MyTrand";

const AfterLoginLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <Container>
      <SideWrraper>
        <SideSection>
          <SideBar />
        </SideSection>
      </SideWrraper>
      <RightSectionWrraper>
        <RightSectionInner>
          <MainWrraper>{children}</MainWrraper>
          <RightSection>
            <MyTrand/>
          </RightSection>
        </RightSectionInner>
      </RightSectionWrraper>
      {modal}
    </Container>
  );
};

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
  width: 275px;
  height: 100dvh;
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
  width: 1000px;
`;

const MainWrraper = styled.main`
  width: 600px;
  height: 200dvh;
  border: 1px solid #eff3f4;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100dvh;
`;
