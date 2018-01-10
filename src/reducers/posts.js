import * as types from '../actions/action-types';

const initialState = {
	posts: [],
	hasErrored: false,
	isLoading: false,
	limit: 10,
};

const postsReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.POSTS_HAS_ERRORED:
		return {
			...state,
			hasErrored: action.hasErrored,
		};

	case types.POSTS_IS_LOADING:
		return {
			...state,
			isLoading: action.isLoading,
		};

	case types.POSTS_FETCH_DATA_SUCCESS:
		return {
			...state,
			posts: action.posts,
		};

	case types.POSTS_LOAD_MORE:
		return {
			...state,
			limit: state.limit + action.limit,
		};

	default:
		return state;
	}
};

export default postsReducer;

