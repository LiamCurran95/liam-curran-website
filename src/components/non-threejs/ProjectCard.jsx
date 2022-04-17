import { techImg, projectTech, projectHostedLink } from "../../utils.js/utils";

export default function ProjectCard({ project }) {
	const tech = projectTech(project);
	return (
		<>
			<h1>{project.name.replaceAll("-", " ")}</h1>
			<p>{project.description.split("(")[0]}</p>
			<div className="buttons">
				<a
					className="button"
					id="github-repo"
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Repo
				</a>
				<a
					className="button"
					id="hosted-link"
					href={projectHostedLink(project)}
					target="_blank"
					rel="noopener noreferrer"
				>
					Hosted Link
				</a>
			</div>
			<div className="language-icon-map">
				{tech.map((x, i) => {
					return <div key={i}>{techImg(x)}</div>;
				})}
			</div>
		</>
	);
}
