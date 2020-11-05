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


interface IRepositories {
	error?: any;
	data?: any;
}

interface IAction {
	type: string;
	error?: any;
	payload?: any;
}

const fetchRepositories = ({ queryString, perPage }): IAction => ({
	type: FETCH_REPOSITORIES,
	payload: {
		queryString,
		perPage,
	},
});

const setRepositories = ({ error, data }: IRepositories): IAction => ({
	type: SET_REPOSITORIES,
  error,
  payload: {
		data
	},
});

const fetchRepositoriesLoading = (): IAction => ({
	type: FETCH_REPOSITORIES_LOADING,
});

const loadRepositories = ({ queryString, page, perPage }): IAction => ({
	type: LOAD_REPOSITORIES,
	payload: { queryString, page, perPage },
});

const loadRepositoriesLoading = (): IAction => ({
	type: LOAD_REPOSITORIES_LOADING,
});

const updateRepositories = ({ error, data }: IRepositories): IAction => ({
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
