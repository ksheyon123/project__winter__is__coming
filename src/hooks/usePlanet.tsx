import { useEffect, RefObject, useCallback } from "react";
import * as THREE from "three";

const usePlanet = () => {

  const initPlanet = useCallback((element: HTMLDivElement) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const renderJSX = renderer.domElement;
    if (element) {
      element.appendChild(renderJSX);
    }
    scene.add(cube);
  }, []);

  return {
    initPlanet,
  }
}

export { usePlanet }