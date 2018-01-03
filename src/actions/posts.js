import axios from 'axios';
import * as types from './action-types';

export function postsHasErrored(bool) {
	return {
		type: types.POSTS_HAS_ERRORED,
		hasErrored: bool,
	};
}

export function postsIsLoading(bool) {
	return {
		type: types.POSTS_IS_LOADING,
		isLoading: bool,
	};
}

export function postsFetchDataSuccess(posts) {
	return {
		type: types.POSTS_FETCH_DATA_SUCCESS,
		posts,
	};
}

export function postsFetchData(url) {
	return (dispatch) => {
		dispatch(postsIsLoading(true));

		axios.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error(response.statusText);
				}

				dispatch(postsIsLoading(false));

				return response.data;
			})
			.then(posts => dispatch(postsFetchDataSuccess(posts)))
			.catch(() => dispatch(postsHasErrored(true)));
	};
}
