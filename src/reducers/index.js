import { combineReducers } from 'redux';

//	Reducers
import postsReducer from './posts';
import actorsReducer from './actors';
import navBarReducer from './navbar';
import sliderReducer from './slider';
import musicReducer from './music';

//	Combine reducers
const reducers = combineReducers({
	postsState: postsReducer,
	actorsState: actorsReducer,
	navState: navBarReducer,
	sliderState: sliderReducer,
	musicState: musicReducer,
});

export default reducers;
