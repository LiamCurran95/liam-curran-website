import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "lc-theme";

const getInitialTheme = () => {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark") return stored;
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return prefersDark ? "dark" : "light";
};

const ThemeContext = createContext({
	theme: "light",
	setTheme: () => {},
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const root = document.documentElement;
		root.dataset.theme = theme;
		root.classList.toggle("dark", theme === "dark");
		root.style.setProperty("color-scheme", theme);
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	const value = useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme: () => {
				setTheme((prev) => (prev === "light" ? "dark" : "light"));
			},
		}),
		[theme]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
};

