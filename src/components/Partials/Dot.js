import React from 'react';
import { PropTypes } from 'prop-types';

const Dot = ({
	id,
	active,
	dotClick,
	slideWidth,
	index,
	translateValue,
}) => {
	const name = active ? 'dot active' : 'dot';

	return (
		<div data-id={id}
			className={name}
			onClick={e => dotClick({
				i: parseInt(e.target.getAttribute('data-id')),
				slideWidth: slideWidth(),
				index,
				translateValue,
			})}>
		</div>
	);
};

Dot.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	active: PropTypes.bool,
	dotClick: PropTypes.func,
	slideWidth: PropTypes.func,
	translateValue: PropTypes.number,
};

export default Dot;
