import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import actorsReducer from './actors';

//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	actorsState: actorsReducer,
});

export default reducers;
