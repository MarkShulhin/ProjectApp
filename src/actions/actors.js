import axios from 'axios';
import * as types from './action-types';


// Action creators
export function actorsHasErrored(bool) {
	return {
		type: types.ACTORS_HAS_ERRORED,
		hasErrored: bool,
	};
}

export function actorsIsLoading(bool) {
	return {
		type: types.ACTORS_IS_LOADING,
		isLoading: bool,
	};
}

export function actorsFetchDataSuccess(actors) {
	return {
		type: types.ACTORS_FETCH_DATA_SUCCESS,
		actors,
	};
}

export function actorsSetFilter(visibilityFilter) {
	return {
		type: types.ACTORS_SET_VISIBILITY_FILTER,
		visibilityFilter,
	};
}

export function actorsFetchData(url) {
	return (dispatch) => {
		dispatch(actorsIsLoading(true));

		axios.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error(response.statusText);
				}

				dispatch(actorsIsLoading(false));

				return response.data;
			})
			.then(actors => dispatch(actorsFetchDataSuccess(actors)))
			.catch(() => {
				dispatch(actorsIsLoading(false));
				dispatch(actorsHasErrored(true));
			});
	};
}
