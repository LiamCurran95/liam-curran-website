import { Canvas } from "@react-three/fiber";
import { Lighting } from "./Lighting";
import { Geometry } from "./Geometry";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { ColorPalette } from "./types";

export const ThreeJS = () => {
  const generateColors = (): ColorPalette => {
    const randomHex = () =>
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return Array.from({ length: 3 }, () => `#${randomHex()}`) as ColorPalette;
  };

  const [colors, setColors] = useState<ColorPalette>(() => generateColors());

  const randomizeColors = () => setColors(generateColors());

  return (
    <section className="relative flex min-h-[95vh] w-full flex-col justify-center overflow-hidden px-0">
      <div className="absolute inset-0">
        <Canvas
          shadows
          camera={{ position: [0, 3, 5], fov: 60 }}
          className="h-full w-full"
        >
          <Lighting />
          <Geometry colors={colors} />
          <OrbitControls />
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
        <div className="h-px w-1/2 max-w-md bg-border" />
        <h1 className="font-display text-5xl uppercase tracking-[0.3em] text-body">
          Liam Curran
        </h1>
        <p className="font-display text-xl uppercase tracking-[0.4em] text-body">
          Software Developer
        </p>
        <Link to="/aboutandcontact" className="retro-button mt-2 px-6">
          Enter
        </Link>
      </div>
      <button
        type="button"
        onClick={randomizeColors}
        className="retro-button absolute bottom-6 left-6 z-10 px-4"
      >
        Click Me
      </button>
    </section>
  );
};
