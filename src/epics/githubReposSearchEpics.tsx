import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, mergeMap, startWith, catchError, debounceTime } from 'rxjs/operators';
import { FETCH_REPOSITORIES } from 'actions/githubReposSearchActions';
import { request, fetchErrorEpic } from 'utils/request';
import { fetchRepositoriesLoading, setRepositories } from 'actions/githubReposSearchActions'

const fetchRepositoriesEpic = (action$) => {
	return action$.pipe(
		ofType(FETCH_REPOSITORIES),
		debounceTime(1000),
		switchMap(({ payload }) => {
			return request({
				method: 'get',
				url: 'https://api.mocki.io/v1/b043df5a',
				data: payload,
			}).pipe(
        mergeMap((data) => {
					return of(
						setRepositories({ data })
					)
				}),
        catchError((error) => fetchErrorEpic(
          error,
					setRepositories({ error }),
        )),
				startWith(fetchRepositoriesLoading()),
			);
		})
	);
};

export default [fetchRepositoriesEpic];
