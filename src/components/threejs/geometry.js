import { Torus } from "./torus";

export function Geometry({ color }) {
	return (
		<group>
			<mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
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
	);
}
