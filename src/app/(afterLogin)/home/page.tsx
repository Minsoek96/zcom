"use client";
import styled from "styled-components";

import Tab from "../_components/tab/Tab";
import PostForm from "../_components/PostForm/PostForm";

import { useTabStore } from "@/app/_store/useTabStore";

export default function Home() {
  const {tab} = useTabStore();

  return (
    <Container>
      <Tab/>
      <PostForm></PostForm>
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
