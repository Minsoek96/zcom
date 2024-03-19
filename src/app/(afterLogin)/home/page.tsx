"use client";
import styled from "styled-components";

import Tab from "../_components/tab/Tab";

import { useTabStore } from "@/app/_store/useTabStore";

export default function Home() {
  const {tab, setTab} = useTabStore();

  return (
    <Container>
      <Tab/>
      <div>
        <h3>{tab}</h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
