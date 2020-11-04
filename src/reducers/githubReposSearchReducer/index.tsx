import update from "immutability-helper";
import { FETCH_REPOSITORIES, FETCH_REPOSITORIES_LOADING, SET_REPOSITORIES } from 'actions/githubReposSearchActions';
import META, {
  updateMetaLoading,
  updateMetaDone,
  updateMetaError,
} from 'utils/meta';

const initialState = {
	repositories: [],
	fetchMeta: META,
};

export default (state = initialState, action) => {
	const { type, error } = action;
	switch (type) {
		case FETCH_REPOSITORIES_LOADING: {
			return update(state, {
				fetchMeta: { $apply: updateMetaLoading }
			});
		}
		case FETCH_REPOSITORIES: {
			console.log('FETCH_REPOSITORIES');
			return state;
		}
		case SET_REPOSITORIES: {
			if (error) {
				return update(state, {
					fetchMeta: { $apply: updateMetaError }
				})
			}
			return update(state, {
				repositories: { $set: action.payload.data },
				fetchMeta: { $apply: updateMetaDone }
			});
		}
		default:
			return state;
	}
};
