import axios from 'axios';
import * as types from './action-types';


// Action creators
export function musicHasErrored(bool) {
	return {
		type: types.MUSIC_FETCH_DATA_REJECT,
		hasErrored: bool,
	};
}

export function musicIsLoading(bool) {
	return {
		type: types.MUSIC_FETCH_DATA_REQUEST,
		isLoading: bool,
	};
}

export function musicFetchDataSuccess(songs) {
	return {
		type: types.MUSIC_FETCH_DATA_SUCCESS,
		songs,
	};
}

export function musicSetActiveIndex(activeIndex) {
	return {
		type: types.MUSIC_SET_ACTIVE_INDEX,
		activeIndex,
	};
}

export function musicFetchData(url) {
	return (dispatch) => {
		dispatch(musicIsLoading(true));

		axios.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error(response.statusText);
				}

				dispatch(musicIsLoading(false));

				return response.data;
			})
			.then(music => dispatch(musicFetchDataSuccess(music)))
			.catch(() => {
				dispatch(musicIsLoading(false));
				dispatch(musicHasErrored(true));
			});
	};
}
