import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/non-threejs/Header.jsx";
import { ThreeJS } from "./components/threejs/threejs.jsx";
import ProjectPage from "./components/non-threejs/ProjectPage.jsx";
import AboutAndContact from "./components/non-threejs/AboutAndContact.jsx";
import Error from "./components/non-threejs/Error.jsx";

function App() {
	return (
		<BrowserRouter>
			<div className="flex min-h-screen flex-col bg-surface text-body transition-colors">
				<Header />
				<main className="flex-1 px-4 pb-12 pt-6 lg:px-8">
					<Routes>
						<Route path="/" element={<ThreeJS />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/aboutandcontact" element={<AboutAndContact />} />
						<Route path="/*" element={<Error />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;

