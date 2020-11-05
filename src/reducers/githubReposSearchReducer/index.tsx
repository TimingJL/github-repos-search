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
import { IGithubReposSearchReducer } from 'types';

interface IIsLastPage {
	page: number;
	perPage: number;
	totalCount: number;
}

const isLastPage = ({ page, perPage, totalCount }: IIsLastPage): boolean => {
	if (page * perPage >= totalCount) {
		return true;
	}
	return false;
}

const initialState: IGithubReposSearchReducer = {
	page: 1,
	perPage: 30,
	isLastPage: false,
	repositories: {
		total_count: 0,
		incomplete_results: false,
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
					fetchMeta: { $apply: (prevMeta) => updateMetaError(prevMeta, error) }
				})
			}
			return update(state, {
				repositories: { $set: action.payload.data },
				fetchMeta: { $apply: updateMetaDone },
				isLastPage: { $apply: () => {
					const { page, perPage } = state;
					const totalCount = action.payload.data.total_count;
					return isLastPage({ page, perPage, totalCount });
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
					loadMeta: { $apply: (prevMeta) => updateMetaError(prevMeta, error) }
				})
			}
			return update(state, {
				repositories: {
					incomplete_results: { $set: action.payload.data.incomplete_results },
					items: { $push: action.payload.data.items }
				},
				isLastPage: { $apply: () => {
					const { page, perPage } = state;
					const totalCount = action.payload.data.total_count;
					return isLastPage({ page, perPage, totalCount });
				}},
				page: { $apply: (prevPage) => {
					const { isLastPage } = state;
					return isLastPage ? prevPage : prevPage + 1
				}},
				loadMeta: { $apply: updateMetaDone }
			});
		}
		default:
			return state;
	}
};
