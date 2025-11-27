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

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl border border-border/30 bg-card/70 p-8 text-center backdrop-blur lg:text-left">
        <h1 className="font-display text-4xl uppercase leading-tight tracking-[0.2em] text-body sm:text-5xl">
          Liam Curran
        </h1>
        <p className="text-lg text-body/80">Software Developer</p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link to="/aboutandcontact" className="retro-button">
            Enter
          </Link>
          <button
            type="button"
            className="retro-button"
            onClick={randomizeColors}
          >
            Click Me!
          </button>
        </div>
      </div>
    </section>
  );
};
