import * as types from '../actions/action-types';

const initialState = {
	posts: [],
	hasErrored: false,
	isLoading: false,
	limit: 10,
	searchFilter: '',
};

const postsReducer = function reducer(state = initialState, action) {
	switch (action.type) {
	case types.POSTS_FETCH_DATA_REJECT:
		return {
			...state,
			hasErrored: action.hasErrored,
		};

	case types.POSTS_FETCH_DATA_REQUEST:
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

	case types.POSTS_RESET_LIMIT:
		return {
			...state,
			limit: action.limit,
		};

	case types.FIND_POSTS:
		return {
			...state,
			searchFilter: action.searchFilter,
		};

	default:
		return state;
	}
};

export default postsReducer;

