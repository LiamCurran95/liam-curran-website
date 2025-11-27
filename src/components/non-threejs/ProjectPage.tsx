import { useEffect, useState } from "react";
import { getStarredRepos } from "../../api";
import type { GitHubRepo } from "../../types/github";
import { ProjectCard } from "./ProjectCard";

type FetchState = {
  loading: boolean;
  error: string | null;
};

export const ProjectPage = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<FetchState>({
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setStatus({ loading: true, error: null });
        const response = await getStarredRepos();
        if (isMounted) {
          setProjects(response);
          setStatus({ loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setStatus({
            loading: false,
            error: "Unable to fetch projects. Please try again shortly.",
          });
        }
      }
    };

    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 py-10">
      <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-body/60">
          Featured Work
        </p>
        <h1 className="mt-2 font-display text-4xl uppercase tracking-[0.2em] text-body">
          Projects
        </h1>
        <p className="mt-4 text-base leading-relaxed text-body/80">
          This list is powered by the GitHub API and surfaces my starred
          repositories. Bookmark it to see what I’m experimenting with next.
        </p>
      </div>

      {status.error && (
        <div className="rounded-2xl border border-red-400/40 bg-red-50/40 p-4 text-sm text-red-800 dark:border-red-500/50 dark:bg-red-500/10">
          {status.error}
        </div>
      )}

      {status.loading ? (
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-72 animate-pulse rounded-2xl border border-border/40 bg-card/60"
            />
          ))}
        </div>
      ) : projects.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-body/70">
          No starred projects surfaced yet—check back soon.
        </p>
      )}
    </section>
  );
};
