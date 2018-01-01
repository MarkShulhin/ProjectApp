import React from 'react';
import { PropTypes } from 'prop-types';

const Dot = ({ id, active, dotClick }) => {
	const name = active ? 'dot active' : 'dot';

	return (
		<div data-id={id}
			className={name}
			onClick={e => dotClick(parseInt(e.target.getAttribute('data-id')))}>
		</div>
	);
};

Dot.propTypes = {
	id: PropTypes.number,
	active: PropTypes.bool,
	dotClick: PropTypes.func,
};

export default Dot;
