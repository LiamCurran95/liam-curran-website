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
		<main className="project-cards">
			<ul>
				{data.map((project, index) => {
					return (
						<ProjectCard project={project} loading={isLoading} key={index} />
					);
				})}
			</ul>
		</main>
	);
}
