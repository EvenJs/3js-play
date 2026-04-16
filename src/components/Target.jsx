import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/target-stand.gltf");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("red");
    }
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

useGLTF.preload("/models/target-stand.gltf");
export default Target;
