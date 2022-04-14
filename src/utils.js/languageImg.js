export default function languageImg(language) {
	if (language === "JavaScript") {
		return (
			<img
				alt="JS icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				className="language-icon"
			/>
		);
	}

	if (language === "HTML") {
		return (
			<img
				alt="HTML icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}

	if (language === "CSS") {
		return (
			<img
				alt="CSS icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (language === "threejs") {
		return (
			<img
				alt="three.js icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
}
