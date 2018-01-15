import * as types from '../actions/action-types';

const initialState = {
	condition: false,
};

const navBarReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.NAVBAR_TOGGLE_MENU:
		return {
			...state,
			condition: !state.condition,
		};

	default:
		return state;
	}
};

export default navBarReducer;
