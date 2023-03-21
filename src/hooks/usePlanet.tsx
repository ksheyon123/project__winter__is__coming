import { useState, useCallback } from "react";

const usePlanet = () => {
  const [renderer, setRenderer] = useState<any>();

  const initPlanet = useCallback((element: HTMLDivElement) => {

  }, []);


  return {
    initPlanet,
  }
}

export { usePlanet }