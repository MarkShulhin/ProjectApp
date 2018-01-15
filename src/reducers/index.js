import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import actorsReducer from './actors';
import navBarReducer from './navbar';

//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	actorsState: actorsReducer,
	navState: navBarReducer,
});

export default reducers;
