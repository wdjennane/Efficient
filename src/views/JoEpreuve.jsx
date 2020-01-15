import React from "react";
import styled from "styled-components";
import { color } from "../style/const";

const Content = styled.main`
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: 100vh;
`;

export const JoEpreuve = () => {
  return (
    <Content>
      <h2> JO Epreuve</h2>
    </Content>
  );
};