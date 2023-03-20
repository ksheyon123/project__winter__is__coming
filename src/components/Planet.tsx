import React, { useRef, RefObject, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

const Planet: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);

  return (
    <StyledPlanet ref={divEl as RefObject<HTMLDivElement>}>
      <Canvas>
        <mesh>

        </mesh>
      </Canvas>
    </StyledPlanet>
  )
}

const StyledPlanet = styled.div`
  width: 100%;
  height: 100%;
`;

export { Planet }