import React, { useRef, RefObject } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";

const MyMesh = () => {
  const divEl = useRef<any>(null);
  useFrame(({ clock }) => {
    const { current } = divEl;
    current.rotation.x = clock.getElapsedTime()
  });
  return (
    <mesh ref={divEl}>

      <sphereGeometry args={[1, 6, 6, 0, 6, 0, 3.14]} />
      <meshBasicMaterial color={"#333"} />
    </mesh>);
}

const Planet: React.FC = () => {

  return (
    <StyledPlanet>
      <Canvas>
        <MyMesh />

        {/* SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float) */}

      </Canvas>
    </StyledPlanet>
  )
}

const StyledPlanet = styled.div`
  width: 100%;
  height: 100%;
`;

export { Planet }