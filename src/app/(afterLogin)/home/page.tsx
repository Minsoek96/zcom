"use client";
import styled from "styled-components";

import Tab from "../_components/tab/Tab";
import PostForm from "../_components/Post/PostForm";
import PostViewList from "../_components/Post/PostViewList";

import { useTabStore } from "@/app/_store/useTabStore";

export default function Home() {
  const {tab} = useTabStore();

  return (
    <Container>
      <Tab/>
      <PostForm></PostForm>
      <PostViewList/>
      <PostViewList/>
      <PostViewList/>
      <div>
        <h3>{tab}</h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200dvh;
  border: 1px solid #eff3f4;
  
  >div:first-child ~ div {
    padding-inline: 15px;
  }
`;
