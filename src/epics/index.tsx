import { combineEpics } from 'redux-observable';
import githubReposSearchEpics from './githubReposSearchEpics';

const rootEpic = combineEpics(...githubReposSearchEpics);

export default rootEpic;
