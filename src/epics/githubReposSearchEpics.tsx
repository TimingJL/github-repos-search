import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FETCH_REPOSITORIES } from 'actions/githubReposSearchActions';

const fetchRepositoriesEpic = action$ => {
	return action$.pipe(
		ofType(FETCH_REPOSITORIES),
		switchMap(({ payload }) => {
			console.log('epics');
			return of({
				type: 'init',
				payload: payload,
			});
		})
	);
};

export default [fetchRepositoriesEpic];
