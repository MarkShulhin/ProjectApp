import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import actorsReducer from './actors';
import navBarReducer from './navbar';
import sliderReducer from './slider';

//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	actorsState: actorsReducer,
	navState: navBarReducer,
	sliderState: sliderReducer,
});

export default reducers;
