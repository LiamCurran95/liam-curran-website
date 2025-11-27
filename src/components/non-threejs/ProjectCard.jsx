import { projectHostedLink, projectTech, techImg } from "../../utils.js/utils";

export default function ProjectCard({ project }) {
	const tech = projectTech(project) ?? [];

	return (
		<article className="flex h-full flex-col rounded-2xl border border-border bg-card/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
			<div className="space-y-2">
				<h2 className="font-display text-2xl uppercase tracking-[0.2em] text-body">
					{project.name.replaceAll("-", " ")}
				</h2>
				<p className="text-sm leading-relaxed text-body/80">
					{project.description?.split("(")?.[0] ?? "No description provided."}
				</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-3">
				{tech.map((item) => {
					const icon = techImg(item);
					return (
						<div
							key={`${project.id}-${item}`}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-surface/70 p-2 text-xs font-semibold text-body/70"
						>
							{icon ? (
								<img
									src={icon.src}
									alt={icon.alt}
									className="h-full w-full object-contain"
									loading="lazy"
								/>
							) : (
								item
							)}
						</div>
					);
				})}
			</div>

			<div className="mt-auto flex flex-wrap gap-4 pt-6">
				<a
					className="retro-button min-w-[140px] justify-center text-sm"
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Repo
				</a>
				{projectHostedLink(project) && (
					<a
						className="retro-button min-w-[140px] justify-center text-sm"
						href={projectHostedLink(project)}
						target="_blank"
						rel="noopener noreferrer"
					>
						Hosted Link
					</a>
				)}
			</div>
		</article>
	);
}
