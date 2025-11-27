import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { MathUtils, type Mesh } from "three";

type TorusProps = {
  position: [number, number, number];
  color: string;
  args: [number, number, number, number];
  speed: number;
  factor: number;
  wireframe?: boolean;
};

export const Torus = ({
  position,
  color,
  args,
  speed,
  factor,
  wireframe = false,
}: TorusProps) => {
  const mesh = useRef<Mesh | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;

    const target = isExpanded ? 1.6 : 1;
    const current = mesh.current.scale.x;
    const next = MathUtils.lerp(current, target, 1 - Math.pow(0.01, delta));
    mesh.current.scale.set(next, next, next);
  });

  return (
    <mesh
      onClick={() => setIsExpanded((prev) => !prev)}
      castShadow
      position={position}
      ref={mesh}
    >
      <torusGeometry args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        factor={factor}
        wireframe={wireframe}
      />
    </mesh>
  );
};
