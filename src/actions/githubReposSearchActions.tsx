const KEY = 'github-repos-search';
const FETCH_REPOSITORIES = `${KEY}/FETCH_REPOSITORIES`;
const SET_REPOSITORIES = `${KEY}/SET_REPOSITORIES`;
const FETCH_REPOSITORIES_LOADING = `${KEY}/FETCH_REPOSITORIES_LOADING`;

const LOAD_REPOSITORIES = `${KEY}/LOAD_REPOSITORIES`;
const LOAD_REPOSITORIES_LOADING = `${KEY}/LOAD_REPOSITORIES_LOADING`;
const UPDATE_REPOSITORIES_LOADING = `${KEY}/UPDATE_REPOSITORIES_LOADING`;

export {
	FETCH_REPOSITORIES,
	FETCH_REPOSITORIES_LOADING,
	SET_REPOSITORIES,
	LOAD_REPOSITORIES,
	LOAD_REPOSITORIES_LOADING,
	UPDATE_REPOSITORIES_LOADING
};

const fetchRepositories = ({ queryString, perPage }) => ({
	type: FETCH_REPOSITORIES,
	payload: {
		queryString,
		perPage,
	},
});

interface IRepositories {
	error?: any;
	data?: any;
}

const setRepositories = ({ error, data }: IRepositories) => ({
	type: SET_REPOSITORIES,
  error,
  payload: {
		data
	},
});

const fetchRepositoriesLoading = () => ({
	type: FETCH_REPOSITORIES_LOADING,
});

const loadRepositories = ({ queryString, page, perPage }) => ({
	type: LOAD_REPOSITORIES,
	payload: { queryString, page, perPage },
});

const loadRepositoriesLoading = () => ({
	type: LOAD_REPOSITORIES_LOADING,
});

const updateRepositories = ({ error, data }: IRepositories) => ({
	type: UPDATE_REPOSITORIES_LOADING,
  error,
  payload: {
		data
	},
});

export {
	fetchRepositories,
	fetchRepositoriesLoading,
	setRepositories,
	loadRepositories,
	loadRepositoriesLoading,
	updateRepositories
};
