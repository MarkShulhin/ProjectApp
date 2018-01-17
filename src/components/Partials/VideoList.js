import React from 'react';
import { PropTypes } from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	const videoItems = props.videos.map(video => (
		<VideoListItem
			onVideoSelect={props.onVideoSelect}
			key={video.etag}
			video={video}
		/>
	));

	return (
		<ul className="list-group">
			{videoItems}
		</ul>
	);
};

VideoList.propTypes = {
	onVideoSelect: PropTypes.func,
	videos: PropTypes.array,
};

export default VideoList;
