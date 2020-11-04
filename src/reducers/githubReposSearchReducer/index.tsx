/* eslint-disable @typescript-eslint/camelcase */
import update from "immutability-helper";
import {
	FETCH_REPOSITORIES_LOADING,
	SET_REPOSITORIES,
	LOAD_REPOSITORIES_LOADING,
	UPDATE_REPOSITORIES_LOADING
} from 'actions/githubReposSearchActions';
import META, {
  updateMetaLoading,
  updateMetaDone,
  updateMetaError,
} from 'utils/meta';

const initialState = {
	page: 1,
	perPage: 30,
	isLastPage: false,
	repositories: {
		total_count: 0,
		items: [],
	},
	fetchMeta: META,
	loadMeta: META,
};

export default (state = initialState, action) => {
	const { type, error } = action;
	switch (type) {
		case FETCH_REPOSITORIES_LOADING: {
			return update(state, {
				fetchMeta: { $apply: updateMetaLoading }
			});
		}
		case SET_REPOSITORIES: {
			if (error) {
				return update(state, {
					fetchMeta: { $apply: updateMetaError }
				})
			}
			return update(state, {
				repositories: { $set: action.payload.data },
				fetchMeta: { $apply: updateMetaDone },
				isLastPage: { $apply: () => {
					const { page, perPage } = state;
					const totalCount = action.payload.data.total_count;
					if (page * perPage >= totalCount) {
						return true;
					}
					return false;
				}},
				page: { $apply: (prevPage) => prevPage + 1},
			});
		}
		case LOAD_REPOSITORIES_LOADING: {
			return update(state, {
				loadMeta: { $apply: updateMetaLoading }
			});
		}
		case UPDATE_REPOSITORIES_LOADING: {
			if (error) {
				return update(state, {
					loadMeta: { $apply: updateMetaError }
				})
			}
			return update(state, {
				repositories: { $apply: (prevRepositories) => {
					const { items } = action.payload.data;
					const prevItems = prevRepositories.items;
					const updatedRepositories = ({
						...action.payload.data,
						items: [
							...prevItems,
							...items,
						]
					});
					return updatedRepositories;
				}},
				isLastPage: { $apply: () => {
					const { page, perPage } = state;
					const totalCount = action.payload.data.total_count;
					if (page * perPage >= totalCount) {
						return true;
					}
					return false;
				}},
				page: { $apply: (prevPage) => {
					const { isLastPage } = state;
					if (isLastPage) {
						return prevPage;
					}
					return prevPage + 1;
				}},
				loadMeta: { $apply: updateMetaDone }
			});
		}
		default:
			return state;
	}
};
