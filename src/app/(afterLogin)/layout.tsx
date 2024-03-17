"use client";
import { styled } from "styled-components";
import SideBar from "./_components/SideBar";

const AfterLoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container>
      <SideWrraper>
        <SideBar />
      </SideWrraper>
      <MainWrraper>
        <MainSection>{children}</MainSection>
      </MainWrraper>
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
  height: 100dvh;
  flex-grow: 1;
`;

const MainWrraper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
`;

const MainSection = styled.main`
  width: 1050px;
  background-color: teal;
  height: 100dvh;
`;
