import { Canvas } from "react-three-fiber";
import { Torus } from "./torus";
import { Lighting } from "./lighting";
import { softShadows, OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { useState } from "react";

softShadows();

export function ThreeJS() {
	const [color, setColor] = useState([
		"mediumturquoise",
		"purple",
		"purple",
		"purple",
		"purple",
		"hotpink",
		"hotpink",
	]);

	const randomColor = () => {
		let colorArr = [];

		const colorGenerator = () => {
			return Math.floor(Math.random() * 16777215).toString(16);
		};
		colorArr.push(`#${colorGenerator()}`);
		colorArr.push(`#${colorGenerator()}`);
		colorArr.push(`#${colorGenerator()}`);
		return colorArr;
	};

	return (
		<>
			<>
				<div className="landing">
					<h1 className="welcome-text">
						Liam Curran <br></br>Software Developer
					</h1>
					<button type="button" className="button">
						<Link to={`about`}>Enter</Link>
					</button>
				</div>
			</>
			<button
				type="button"
				className="button-change-colors"
				onClick={() => {
					setColor(randomColor());
				}}
			>
				Click Me{" "}
			</button>
			<Canvas shadows camera={{ position: [0, 3, 5], fov: 60 }}>
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
						color={color[0]}
						args={[1, 0.3, 30, 150]}
						speed={0.6}
						factor={3}
						wireframe={false}
					/>
					<Torus
						position={[3, 1, 0]}
						color={color[1]}
						args={[0.75, 0.3, 30, 150]}
						speed={0.6}
						factor={6}
						wireframe={true}
					/>

					<Torus
						position={[-3, 1, 0]}
						color={color[2]}
						args={[0.75, 0.3, 30, 150]}
						speed={0.6}
						factor={6}
						wireframe={true}
					/>
				</group>
				<OrbitControls />
			</Canvas>
		</>
	);
}
