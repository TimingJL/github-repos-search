import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import rootEpic from 'epics';

declare global {
	// eslint-disable-next-line @typescript-eslint/interface-name-prefix
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const epicMiddleware = createEpicMiddleware({
});

export default function configureStore() {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const middlewares = [epicMiddleware];
	const enhancers = [applyMiddleware(...middlewares)];
	const store = createStore(rootReducer, composeEnhancers(...enhancers));
	epicMiddleware.run(rootEpic);
	return store;
}
