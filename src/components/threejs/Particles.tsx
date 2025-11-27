import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points as ThreePoints } from "three";

type ParticlesProps = {
  position?: [number, number, number];
  color?: string;
  count?: number;
  radius?: number;
  size?: number;
};

export const Particles = ({
  position = [0, 0, 0],
  color = "#ffffff",
  count = 400,
  radius = 3,
  size = 0.01,
}: ParticlesProps) => {
  const pointsRef = useRef<ThreePoints | null>(null);

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const phi = Math.random() * Math.PI * 2;
      const costheta = Math.random() * 2 - 1;
      const u = Math.random();
      const theta = Math.acos(costheta);
      const r = radius * Math.cbrt(u);

      data[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      data[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      data[i * 3 + 2] = r * Math.cos(theta);
    }
    return data;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x += 0.005 * delta * 60;
    pointsRef.current.rotation.y += 0.005 * delta * 60;
  });

  return (
    <points position={position} ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} sizeAttenuation />
    </points>
  );
};
