import { Canvas } from "@react-three/fiber";
import { Lighting } from "./lighting.jsx";
import { Geometry } from "./geometry.jsx";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { useState } from "react";

export function ThreeJS() {
  const generateColors = () => {
    const randomHex = () =>
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return Array.from({ length: 3 }, () => `#${randomHex()}`);
  };
  const [colors, setColors] = useState(generateColors);

  const randomizeColors = () => setColors(generateColors());

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-10 lg:flex-row lg:items-center">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-body/60">
          Welcome
        </p>
        <h1 className="font-display text-4xl uppercase leading-tight tracking-[0.2em] text-body sm:text-5xl">
          Liam Curran
        </h1>
        <p className="text-lg text-body/80">
          Software Developer crafting playful 3D experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Link to="/aboutandcontact" className="retro-button">
            Enter
          </Link>
          <button
            type="button"
            className="retro-button"
            onClick={randomizeColors}
          >
            Shuffle Colors
          </button>
        </div>
      </div>

      <div className="relative flex-1 rounded-3xl border border-border bg-card/70 p-4 shadow-lg">
        <span className="pointer-events-none absolute inset-x-12 top-4 h-8 rounded-full bg-accent/10 blur-3xl" />
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
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
      </div>
    </section>
  );
}
