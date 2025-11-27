import axios from "axios";
import type { GitHubRepo } from "./types/github";

const githubClient = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/vnd.github+json",
	},
});

export const getStarredRepos = async (): Promise<GitHubRepo[]> => {
	const { data } = await githubClient.get<GitHubRepo[]>(
		"/users/LiamCurran95/starred"
	);
	return data;
};

export const getRepoLanguages = async (
	repoUrl: string
): Promise<Record<string, number>> => {
	const { data } = await axios.get<Record<string, number>>(`${repoUrl}/languages`);
	return data;
};
