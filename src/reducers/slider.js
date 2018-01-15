import * as types from '../actions/action-types';

const initialState = {
	images: [],
	index: 0,
	translateValue: 0,
	autoplay: false,
	isLoading: false,
	hasErrored: false,
	interval: null,
};

const sliderReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.SLIDER_FETCH_DATA_REJECT:
		return {
			...state,
			hasErrored: action.hasErrored,
		};

	case types.SLIDER_FETCH_DATA_REQUEST:
		return {
			...state,
			isLoading: action.isLoading,
		};

	case types.SLIDER_FETCH_DATA_SUCCESS:
		return {
			...state,
			images: action.images,
		};

	case types.SLIDER_TOGGLE_AUTOPLAY:
		return {
			...state,
			autoplay: !state.autoplay,
		};

	case types.SLIDER_NEXT_SLIDE:
		return {
			...state,
			translateValue: action.translateValue,
			index: action.index,
		};

	case types.SLIDER_PREV_SLIDE:
		return {
			...state,
			translateValue: action.translateValue,
			index: action.index,
		};

	case types.SLIDER_TOGGLE_INTERVAL:
		return {
			...state,
			interval: action.interval,
		};

	case types.SLIDER_DOT_CLICK:
		return {
			...state,
			translateValue: action.translateValue,
			index: action.index,
		};

	default:
		return state;
	}
};

export default sliderReducer;

