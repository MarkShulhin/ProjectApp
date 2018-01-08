import * as types from '../actions/action-types';

const initialState = {
	actors: [],
	hasErrored: false,
	isLoading: false,
};

const actorsReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.ACTORS_HAS_ERRORED:
		return {
			...state,
			hasErrored: action.hasErrored,
		};

	case types.ACTORS_IS_LOADING:
		return {
			...state,
			isLoading: action.isLoading,
		};

	case types.ACTORS_FETCH_DATA_SUCCESS:
		return {
			...state,
			actors: action.actors,
		};

	default:
		return state;
	}
};

export default actorsReducer;

