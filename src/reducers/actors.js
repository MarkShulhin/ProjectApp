import * as types from '../actions/action-types';

const initialState = {
	actors: [],
	hasErrored: false,
	isLoading: false,
	visibilityFilter: 'SHOW_ALL',
};

const actorsReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.ACTORS_FETCH_DATA_REJECT:
		return {
			...state,
			hasErrored: action.hasErrored,
		};

	case types.ACTORS_FETCH_DATA_REQUEST:
		return {
			...state,
			isLoading: action.isLoading,
		};

	case types.ACTORS_FETCH_DATA_SUCCESS:
		return {
			...state,
			actors: action.actors,
		};

	case types.ACTORS_SET_VISIBILITY_FILTER:
		return {
			...state,
			visibilityFilter: action.visibilityFilter,
		};

	default:
		return state;
	}
};

export default actorsReducer;

