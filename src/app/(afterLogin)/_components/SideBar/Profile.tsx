import React from "react";

import { MeIcon } from "../../_constants/MenuIcons";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <div>
        <MeIcon />
        <div>
            <div>t</div>
            <div>@test555</div>
        </div>
      </div>
      <div>...</div>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 11px;

  div:first-child {
    display: flex;
  }

  &:hover {
    background-color: RGB(231, 231, 232);
    border-radius: 21px;
  }
`;
