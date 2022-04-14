import { useState, useEffect } from "react";
import { getRepoLanguages } from "../../api";
import languageImg from "../../utils.js/languageImg";

export default function ProjectCard({ project }) {
	const [isLoading, setIsLoading] = useState(true);
	const [languages, setLanguages] = useState([]);
	console.log(project);

	useEffect(() => {
		if (languages.length === 0) {
			setIsLoading(true);
			getRepoLanguages(project.url).then((res) => {
				setLanguages(res);
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
		}
	}, [languages, project.url]);

	return isLoading ? (
		<p>"Loading" </p>
	) : (
		<div>
			<h1>{project.name}</h1>
			{/* <h2>{project.html_url}</h2> */}
			<a href={project.html_url}>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
					className="language-icon"
					alt="github link"
				/>
			</a>
			<p>Description: {project.description}</p>
			{languages.map((language) => {
				return Object.keys(language).map((a) => {
					console.log(a);
					return <ul>{languageImg(a)}</ul>;
				});
			})}
			{/* <p>Project Size: {project.size}</p> */}
		</div>
	);
}
