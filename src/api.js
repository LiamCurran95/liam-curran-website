import axios from "axios";

export const getStarredRepos = () => {
	return axios
		.get(`https://api.github.com/users/LiamCurran95/starred`)
		.then(({ data }) => {
			return data;
		});
};

export const getRepoLanguages = (repo) => {
	return axios.get(`${repo}/languages`).then(({ data }) => {
		return [data];
	});
};
