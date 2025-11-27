import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/non-threejs/Header";
import { ThreeJS } from "./components/threejs/ThreeJS";
import { ProjectPage } from "./components/non-threejs/ProjectPage";
import { AboutAndContact } from "./components/non-threejs/AboutAndContact";
import { Error } from "./components/non-threejs/Error";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-surface text-body transition-colors">
        <Header />
        <main className="flex-1 ">
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
};
