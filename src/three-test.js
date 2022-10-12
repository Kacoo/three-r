import React, { Component, useEffect } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/js/controls/OrbitControls";

function ThreeMap() {
  useEffect(() => {
    initThree();
  }, []);
  function initThree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(3, 1, 20);

    const container = document.getElementById("container");
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#af3", 0.5);
    container.appendChild(renderer.domElement);

    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);

    const geometry = new THREE.BoxGeometry(1, 2, 3);
    const material = new THREE.MeshBasicMaterial({ color: "#fff" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    renderer.render(scene, camera);
  }

  return <div id="container" />;
}

export default ThreeMap;
