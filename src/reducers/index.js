import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';

//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
});

export default reducers;
