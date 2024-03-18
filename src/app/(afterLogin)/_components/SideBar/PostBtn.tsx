import React from "react";

import { styled } from "styled-components";

type PostBtn = {
  name: string;
  onClick: () => void;
};

const PostBtn = ({ name, onClick }: PostBtn) => {
  return <Container onClick={onClick}>{name}</Container>;
};

export default PostBtn;

const Container = styled.button.attrs({
  type: "button",
})`
  width: 233px;
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  color: #fff;
  background: #1d9bf0;
  border-radius: 9999px;
  border: none;
  height: 54px;
  cursor: pointer;
`;
