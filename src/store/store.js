import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const initialState = {};

const store = createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
