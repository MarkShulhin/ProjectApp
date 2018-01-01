import React from 'react';
import { PropTypes } from 'prop-types';

const SliderRightArrow = ({ nextSlide }) => (
	<div className="slider-right-arrow" onClick={nextSlide}>
		<img src="img/slider-right-arrow.svg" />
	</div>
);

SliderRightArrow.propTypes = {
	nextSlide: PropTypes.func,
};

export default SliderRightArrow;
