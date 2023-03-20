import React from "react";
import styled from "styled-components";
import { Planet } from "@src/components";

const PlanetPage: React.FC = () => {

  return (
    <StyledView>
      <Planet />
    </StyledView>
  )
}

const StyledView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

export { PlanetPage }