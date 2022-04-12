import { Canvas } from "react-three-fiber";
import { Torus } from "./torus";
import { Lighting } from "./lighting";
import { softShadows, OrbitControls } from "@react-three/drei";
import Button from "@mui/material/Button";

softShadows();

export function ThreeJS() {
	return (
		<>
			<>
				<div className="landing">
					<h1>Liam Curran | Full Stack Software Developer</h1>
					<Button variant="outlined">Enter</Button>
				</div>
			</>
			<Canvas shadows camera={{ position: [-5, 3, 15], fov: 60 }}>
				<Lighting />
				<group>
					<mesh
						receiveShadow
						rotation={[-Math.PI / 2, 0, 0]}
						position={[0, -2, 0]}
					>
						<planeBufferGeometry attach="geometry" args={[50, 50]} />
						<shadowMaterial attach="material" opacity={0.5} color="black" />
					</mesh>
					<Torus
						position={[0, 1, 0]}
						color="mediumturquoise"
						args={[1, 0.3, 30, 150]}
						speed={0.6}
						factor={3}
						wireframe={true}
					/>
					<Torus
						position={[-2, 1, -5]}
						color="purple"
						args={[0.75, 0.3, 30, 150]}
						speed={0.6}
						factor={6}
						wireframe={false}
					/>
					<Torus
						position={[5, 1, -2]}
						color="hotlink"
						args={[0.75, 0.3, 30, 150]}
						speed={0.6}
						factor={6}
						wireframe={false}
					/>
				</group>
				<OrbitControls />
			</Canvas>
		</>
	);
}
