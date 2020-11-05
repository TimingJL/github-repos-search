import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, mergeMap, startWith, catchError, debounceTime } from 'rxjs/operators';
import { FETCH_REPOSITORIES, LOAD_REPOSITORIES } from 'actions/githubReposSearchActions';
import { request } from 'utils/request';
import { fetchRepositoriesLoading, setRepositories, updateRepositories, loadRepositoriesLoading } from 'actions/githubReposSearchActions'

const githubBaseUrl = 'https://api.github.com/search/repositories'

const fetchRepositoriesEpic = (action$) => {
	return action$.pipe(
		ofType(FETCH_REPOSITORIES),
		debounceTime(1000),
		switchMap(({ payload }) => {
			const { queryString, perPage } = payload;
			return request({
				method: 'get',
				url: `${githubBaseUrl}?q=${queryString}&page=1&per_page=${perPage}`,
			}).pipe(
        mergeMap((data) => {
					return of(
						setRepositories({ data })
					)
				}),
        catchError((error) => of(setRepositories({ error }))),
				startWith(fetchRepositoriesLoading()),
			);
		})
	);
};

const loadRepositoriesEpic = (action$) => {
	return action$.pipe(
		ofType(LOAD_REPOSITORIES),
		switchMap(({ payload }) => {
			const { queryString, page, perPage } = payload;
			return request({
				method: 'get',
				url: `${githubBaseUrl}?q=${queryString}=${page}&per_page=${perPage}`,
			}).pipe(
        mergeMap((data) => {
					return of(
						updateRepositories({ data })
					)
				}),
				catchError((error) => of(updateRepositories({ error }))),
				startWith(loadRepositoriesLoading()),
			);
		})
	);
};

export default [
	fetchRepositoriesEpic,
	loadRepositoriesEpic,
];
