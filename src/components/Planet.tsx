import React, { useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";

const Planet: React.FC = () => {
  const mesh = useRef<any>(null);
  return (
    <StyledView>
      <Canvas className="canvas">
        <mesh ref={mesh} scale={1}>
          <cylinderBufferGeometry color="red" args={[1, 1, 0.3, 50]} />
          <meshLambertMaterial attach="material" />
        </mesh>
      </Canvas>
    </StyledView>
  )
}

const StyledView = styled.div`
  width: 100%;
  height: 100%;
`;

export { Planet }