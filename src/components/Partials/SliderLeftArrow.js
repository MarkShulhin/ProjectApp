import React from 'react';
import { PropTypes } from 'prop-types';

const SliderLeftArrow = ({ prevSlide }) => (
	<div className="slider-left-arrow" onClick={prevSlide}>
		<img src="img/slider-left-arrow.svg" />
	</div>
);

SliderLeftArrow.propTypes = {
	prevSlide: PropTypes.func,
};

export default SliderLeftArrow;
