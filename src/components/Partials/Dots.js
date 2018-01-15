import { PropTypes } from 'prop-types';
import React from 'react';
import Dot from './Dot';

const Dots = ({
	index,
	quantity,
	dotClick,
	slideWidth,
	translateValue,
}) => {
	const dots = [];

	for (let i = 0; i < quantity; i += 1) {
		const isActive = i === index;

		dots.push(<Dot key={i}
			id={i}
			index={index}
			translateValue={translateValue}
			slideWidth={slideWidth}
			active={isActive}
			dotClick={dotClick}
		/>);
	}

	return (
		<div className="dots-container">
			{ dots }
		</div>
	);
};

Dots.propTypes = {
	index: PropTypes.number,
	quantity: PropTypes.number,
	dotClick: PropTypes.func,
	slideWidth: PropTypes.func,
	translateValue: PropTypes.number,
};

export default Dots;
