const KEY = 'github-repos-search';
const FETCH_REPOSITORIES = `${KEY}/FETCH_REPOSITORIES`;
const SET_REPOSITORIES = `${KEY}/SET_REPOSITORIES`;
const FETCH_REPOSITORIES_LOADING = `${KEY}/FETCH_REPOSITORIES_LOADING`;

export { FETCH_REPOSITORIES, FETCH_REPOSITORIES_LOADING, SET_REPOSITORIES };

const fetchRepositories = queryString => ({
	type: FETCH_REPOSITORIES,
	payload: {
		queryString,
	},
});

interface ISetRepositories {
	error?: any;
	data?: any;
}

const setRepositories = ({ error, data }: ISetRepositories) => ({
	type: SET_REPOSITORIES,
  error,
  payload: {
		data
	},
});

const fetchRepositoriesLoading = () => ({
	type: FETCH_REPOSITORIES_LOADING,
});

export { fetchRepositories, fetchRepositoriesLoading, setRepositories };
