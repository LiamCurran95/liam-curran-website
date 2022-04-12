import { useState, useEffect } from "react";
import { getRepoLanguages } from "../../api";

export default function ProjectCard({ project }) {
	const [isLoading, setIsLoading] = useState(true);
	const [languages, setLanguages] = useState([]);

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
	}, [languages]);

	return isLoading ? (
		<p>"Loading" </p>
	) : (
		<>
			<h1>{project.name}</h1>
			<h2>{project.html_url}</h2>
			<ul>
				{languages.map((language) => {
					return Object.keys(language).map((a) => {
						return <li>{a}</li>;
					});
				})}
			</ul>
			{/* Figure out how to add in lines against each one */}
			<p>Project Size: {project.size}</p>
			<h4>Clone this project: {project.html_url + ".git"}</h4>
		</>
	);
}
