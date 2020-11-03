import { FETCH_REPOSITORIES } from 'actions/githubReposSearchActions';

const initialState = {
	repositories: {},
};

export default (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case 'init': {
			console.log('init reducer');
			return state;
		}
		case FETCH_REPOSITORIES: {
			console.log('FETCH_REPOSITORIES');
			return state;
		}
		default:
			return state;
	}
};
