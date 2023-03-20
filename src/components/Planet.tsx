import React, { useRef, RefObject, useEffect } from "react";
import styled from "styled-components";
import { usePlanet } from "@src/hooks/usePlanet";

const Planet: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);
  const { initPlanet } = usePlanet();

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      initPlanet(current);
    }
  }, [divEl]);

  return (
    <StyledPlanet ref={divEl as RefObject<HTMLDivElement>} />
  )
}

const StyledPlanet = styled.div`
  width: 100%;
  height: 100%;
`;

export { Planet }