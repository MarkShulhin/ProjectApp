import React from 'react';
import { PropTypes } from 'prop-types';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const { videoId } = video.id;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div class="video-detail main-video">
			<div class="embed-responsive embed-responsive-16by9">
				<iframe class="embed-responsive-item" src={url} />
			</div>
			<div class="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

VideoDetail.propTypes = {
	video: PropTypes.object,
};

export default VideoDetail;
