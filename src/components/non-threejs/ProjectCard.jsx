import { techImg, projectTech } from "../../utils.js/utils";

export default function ProjectCard({ project }) {
	const tech = projectTech(project);
	return (
		<div>
			<h1>{project.name.replaceAll("-", " ")}</h1>
			<a href={project.html_url}>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
					className="github-repo-icon"
					alt="github link"
				/>
			</a>
			<p>Description: {project.description.split("(")[0]}</p>
			<div className="language-icon-map">
				{tech.map((x) => {
					return <div>{techImg(x)}</div>;
				})}
			</div>
		</div>
	);
}
