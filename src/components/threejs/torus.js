import { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, a } from "react-spring/three";

export function Torus({ position, color, args, speed, factor, wireframe }) {
	const mesh = useRef(null);

	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	const [expand, setExpand] = useState(false);

	const props = useSpring({
		scale: expand ? [2, 2, 2] : [1, 1, 1],
	});

	return (
		<a.mesh
			onClick={() => {
				setExpand(!expand);
			}}
			scale={props.scale}
			castShadow
			position={position}
			ref={mesh}
		>
			<torusBufferGeometry attach="geometry" args={args} />
			<MeshWobbleMaterial
				attach="material"
				color={color}
				speed={speed}
				factor={factor}
				wireframe={wireframe}
			/>
		</a.mesh>
	);
}
