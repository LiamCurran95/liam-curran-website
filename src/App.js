import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThreeJS } from "./components/threejs/threejs";
import ProjectPage from "./components/non-threejs/ProjectPage";
import Header from "./components/non-threejs/Header";
import AboutAndContact from "./components/non-threejs/AboutAndContact";
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
					<Route path="/aboutandcontact" element={<AboutAndContact />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
