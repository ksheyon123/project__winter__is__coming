import * as THREE from "three";

const usePlanet = () => {
  const createScene = () => {
    const scene = new THREE.Scene();
  }

  const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const renderJSX = renderer.domElement
    return (
      { renderJSX }
    )
  }

  return {
    createRenderer
  }
}

export { usePlanet }