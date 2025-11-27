import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Points } from "three";

export function Particles({ position, color, args }) {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.005;
  });
  return (
    <mesh position={position} ref={mesh}>
      <Points attach="geometry" args={args} />
      <pointsMaterial attach="material" color={color} size={0.01} />
    </mesh>
  );
}
