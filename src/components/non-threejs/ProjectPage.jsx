import { getStarredRepos } from "../../api";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data.length === 0) {
			setIsLoading(true);
			getStarredRepos().then((res) => {
				setData(res);
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
		}
	}, [data]);

	if (isLoading === true) return <p>"Loading" </p>;

	return isLoading ? (
		<p>"Loading" </p>
	) : (
		<>
			<div className="project-page-intro">
				<h1>Projects</h1>
				<h3>
					Here you can view some projects that I have completed, this page uses
					the GitHub API to view my 'starred' projects and will continue to
					update as I further develop my portfolio, so come back soon!
				</h3>
			</div>
			<div className="project-cards">
				{data.map((project, index) => {
					return (
						<ProjectCard project={project} loading={isLoading} key={index} />
					);
				})}
			</div>
		</>
	);
}
