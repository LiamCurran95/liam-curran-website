import React from "react";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/themeContext";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
