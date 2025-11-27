/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Bebas Neue"', "ui-sans-serif", "system-ui"],
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"'Segoe UI'",
					"sans-serif",
				],
			},
			colors: {
				surface: "rgb(var(--color-surface) / <alpha-value>)",
				body: "rgb(var(--color-body) / <alpha-value>)",
				card: "rgb(var(--color-card) / <alpha-value>)",
				border: "rgb(var(--color-border) / <alpha-value>)",
				button: "rgb(var(--color-button) / <alpha-value>)",
				buttonText: "rgb(var(--color-button-text) / <alpha-value>)",
				accent: "rgb(var(--color-accent) / <alpha-value>)",
			},
			boxShadow: {
				retro: "4px 4px 0 0 rgb(0 0 0 / 0.4)",
			},
		},
	},
	plugins: [],
};

