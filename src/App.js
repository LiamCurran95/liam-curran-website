import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThreeJS } from "./components/threejs/threejs";
import ProjectPage from "./components/non-threejs/ProjectPage";
import Header from "./components/non-threejs/Header";
import Contact from "./components/non-threejs/Contact";
import About from "./components/non-threejs/About";
import Error from "./components/non-threejs/Error";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";

function App() {
	const { toggle } = useContext(ThemeContext);

	return (
		<BrowserRouter>
			<div className={`App ${toggle ? "dark" : "light"}`}>
				<Header />
				<Routes>
					<Route path="/" element={<ThreeJS />} />
					<Route path="/projects" element={<ProjectPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
