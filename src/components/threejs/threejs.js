import { Canvas } from "react-three-fiber";
import { Lighting } from "./lighting";
import { Geometry } from "./geometry";
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
		<body className="home-page">
			<div className="landing">
				<h1 className="welcome-text">
					Liam Curran <br></br>Software Developer
				</h1>
				<button type="button" className="button">
					<Link to={`about`}>Enter</Link>
				</button>
			</div>
			<button
				type="button"
				className="button-change-colors"
				onClick={() => {
					setColor(randomColor());
				}}
			>
				Click Me
			</button>
			<div className="canvas">
				<Canvas shadows camera={{ position: [0, 3, 5], fov: 60 }}>
					<Lighting />
					<Geometry color={color} />
					<OrbitControls />
				</Canvas>
			</div>
		</body>
	);
}
