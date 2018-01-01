import React from 'react';
import { PropTypes } from 'prop-types';

const Autoplay = ({ toggle, autoplay }) => (
	<div className="autoplay" onClick={toggle}>
		{
			autoplay ?
				<p>Disable Autoplay</p>
				: <p>Enable Autoplay</p>
		}
	</div>
);

Autoplay.propTypes = {
	toggle: PropTypes.func,
	autoplay: PropTypes.bool,
};

export default Autoplay;

