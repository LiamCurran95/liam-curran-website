import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThreeJS } from "./components/threejs/threejs";
import ProjectPage from "./components/non-threejs/ProjectPage";

function App() {
	return (
		<BrowserRouter>
			<>
				<Routes>
					<Route path="/" element={<ThreeJS />} />
					<Route path="/projects" element={<ProjectPage />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default App;
