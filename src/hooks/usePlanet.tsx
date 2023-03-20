import { useState, useCallback } from "react";
import * as THREE from "three";

const usePlanet = () => {
  const [renderer, setRenderer] = useState<any>();

  const initPlanet = useCallback((element: HTMLDivElement) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    const renderJSX = renderer.domElement;
    if (element) {
      element.appendChild(renderJSX);
    }
    const geometry = new THREE.CircleGeometry(5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
  }, []);


  return {
    initPlanet,
  }
}

export { usePlanet }