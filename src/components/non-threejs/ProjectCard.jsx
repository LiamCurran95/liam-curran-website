import { techImg, projectTech } from "../../utils.js/utils";

export default function ProjectCard({ project }) {
	const tech = projectTech(project);
	return (
		<>
			<h1>
				{project.name.replaceAll("-", " ")}
				<a href={project.html_url}>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
						className="github-repo-icon"
						alt="github link"
					/>
				</a>
			</h1>
			<p>{project.description.split("(")[0]}</p>
			<div className="language-icon-map">
				{tech.map((x, i) => {
					return <div key={i}>{techImg(x)}</div>;
				})}
			</div>
		</>
	);
}
