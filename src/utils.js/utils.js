export function techImg(tech) {
	if (tech === "JavaScript") {
		return (
			<img
				alt="JavaScript icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				className="language-icon"
			/>
		);
	}

	if (tech === "HTML") {
		return (
			<img
				alt="HTML icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}

	if (tech === "CSS") {
		return (
			<img
				alt="CSS icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "three.js") {
		return (
			<img
				alt="three.js icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Mocha") {
		return (
			<img
				alt="Mocha icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Chai") {
		return (
			<img
				alt="Chai icon"
				src="https://avatars.githubusercontent.com/u/1515293?s=280%v=4"
				className="language-icon"
			/>
		);
	}
	if (tech === "MongoDB") {
		return (
			<img
				alt="mongodb icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Mongoose") {
		return (
			<img
				alt="Mongoose icon"
				src="https://avatars.githubusercontent.com/u/7552965?s=280%v=4"
				className="language-icon"
			/>
		);
	}
	if (tech === "Express") {
		return (
			<img
				alt="Express.js icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "postgreSQL") {
		return (
			<img
				alt="postgreSQL icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Node.js") {
		return (
			<img
				alt="nodejs icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "D3") {
		return (
			<img
				alt="d3 icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Jest") {
		return (
			<img
				alt="Jest icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "React") {
		return (
			<img
				alt="React icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "Heroku") {
		return (
			<img
				alt="Heroku icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
				className="language-icon"
			/>
		);
	}
	if (tech === "MUI") {
		return (
			<img
				alt="MUI icon"
				src="https://mui.com/static/logo.png"
				className="language-icon"
			/>
		);
	}
	if (tech === "Axios") {
		return (
			<img
				alt="Axios icon"
				src="https://avatars.githubusercontent.com/u/32372333?s=200%v=4"
				className="language-icon"
			/>
		);
	}
	if (tech === "VISX") {
		return (
			<img
				alt="VISX icon"
				src="https://airbnb.io/img/projects/visx.png"
				className="language-icon"
			/>
		);
	}
	if (tech === "Nodemon") {
		return (
			<img
				alt="Nodemon icon"
				src="https://cdn.iconscout.com/icon/free/png-256/nodemon-226039.png"
				className="language-icon"
			/>
		);
	}
	if (tech === "Netlify") {
		return (
			<img
				alt="Netlify icon"
				src="https://www.netlify.com/v3/img/components/logomark.png"
				className="language-icon"
			/>
		);
	}
	if (tech === "PostgreSQL") {
		return (
			<img
				alt="PostgreSQL icon"
				src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
				className="language-icon"
			/>
		);
	}
}

export function projectTech(project) {
	if (project.name === "NC-News-Back-End") {
		return ["JavaScript", "Node.js", "Express", "PostgreSQL", "Jest", "Heroku"];
	}
	if (project.name === "NC-News-Front-End") {
		return ["JavaScript", "React", "Axios", "MUI", "Netlify"];
	}
	if (project.name === "Vested-Back-End") {
		return [
			"JavaScript",
			"MongoDB",
			"Mongoose",
			"Express",
			"Node.js",
			"Mocha",
			"Chai",
			"Heroku",
			"Nodemon",
		];
	}
	if (project.name === "Vested-Front-End") {
		return ["JavaScript", "React", "Axios", "Heroku", "MUI", "VISX", "Netlify"];
	}
}
