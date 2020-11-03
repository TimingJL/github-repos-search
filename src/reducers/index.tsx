import { combineReducers } from 'redux';
import githubReposSearchReducer from './githubReposSearchReducer';

const rootReducer = combineReducers({
	githubReposSearchReducer,
});

export default rootReducer;
