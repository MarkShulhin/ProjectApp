import axios from 'axios';
import * as types from './action-types';

export function sliderHasErrored(bool) {
	return {
		type: types.SLIDER_FETCH_DATA_REJECT,
		hasErrored: bool,
	};
}

export function sliderIsLoading(bool) {
	return {
		type: types.SLIDER_FETCH_DATA_REQUEST,
		isLoading: bool,
	};
}

export function sliderFetchDataSuccess(images) {
	return {
		type: types.SLIDER_FETCH_DATA_SUCCESS,
		images,
	};
}

export function sliderToggleAutoplay() {
	return {
		type: types.SLIDER_TOGGLE_AUTOPLAY,
	};
}

export function sliderGoToNextSlide(payload) {
	return {
		type: types.SLIDER_NEXT_SLIDE,
		translateValue: payload.translateValue,
		index: payload.index,
	};
}

export function sliderGoToPrevSlide(payload) {
	return {
		type: types.SLIDER_PREV_SLIDE,
		translateValue: payload.translateValue,
		index: payload.index,
	};
}

export function sliderDotClick(payload) {
	return {
		type: types.SLIDER_DOT_CLICK,
		translateValue: payload.translateValue,
		index: payload.index,
	};
}

export function sliderToggleInterval(interval) {
	return {
		type: types.SLIDER_TOGGLE_INTERVAL,
		interval,
	};
}


export function sliderFetchImages(url) {
	return (dispatch) => {
		dispatch(sliderIsLoading(true));

		axios.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error(response.statusText);
				}

				dispatch(sliderIsLoading(false));

				return response.data;
			})
			.then(images => dispatch(sliderFetchDataSuccess(images)))
			.catch(() => {
				dispatch(sliderIsLoading(false));
				dispatch(sliderHasErrored(true));
			});
	};
}
