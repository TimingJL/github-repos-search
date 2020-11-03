const KEY = 'github-repos-search';
const FETCH_REPOSITORIES = `${KEY}/FETCH_REPOSITORIES`;

export { FETCH_REPOSITORIES };

const fetchRepositories = queryString => ({
	type: FETCH_REPOSITORIES,
	payload: {
		queryString,
	},
});

export { fetchRepositories };
