import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class AudioBubble extends Component {
	constructor(props) {
		super();
		this.state = {
			strokeDashoffset: null,
		};
	}
	componentDidMount() {
		this.$audio.addEventListener('loadedmetadata', () => {
			this.duration = this.$audio.duration;
		});
		this.pathLength = this.$progress.getTotalLength();
		this.setState({
			strokeDashoffset: this.pathLength,
		});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.active) {
			const progressUpdater = () => {
				this.updateProgressBar();
				this.progressLoop = requestAnimationFrame(progressUpdater);
			};
			this.$audio.play();
			this.progressLoop = requestAnimationFrame(progressUpdater);
			this.$audio.addEventListener('ended', this.props.onComplete);
		} else {
			cancelAnimationFrame(this.progressLoop);
			this.$audio.addEventListener('ended', this.props.onComplete);
			this.$audio.pause();
			this.$audio.currentTime = 0;
			this.setState({
				strokeDashoffset: this.pathLength,
			});
		}
	}
	updateProgressBar() {
		try {
			const { currentTime } = this.$audio;
			const percentage = (currentTime / this.duration);
			const strokeDashoffset = percentage * this.pathLength;
			this.setState({
				strokeDashoffset: (this.pathLength - strokeDashoffset),
			});
		} catch (error) {
			// music stopped
		}

	}
	handleClick() {
		this.props.setActive();
	}
	render() {
		return (
			<figure
				className={	this.props.active ?
					'audio-bubble--active' :
					'audio-bubble'
				}
			>
				<audio
					src={this.props.audio}
					ref={(ref) => { this.$audio = ref; }}
				/>
				<button
					onClick={this.handleClick.bind(this)}
					className="audio-bubble__button"
				>
					<svg
						viewBox="0 0 200 200"
						className="audio-bubble__progress"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="100"
							cy="100"
							r="97"
							strokeWidth="3"
							fill="none"
							ref={(ref) => { this.$progress = ref; }}
							style={{ strokeDashoffset: this.state.strokeDashoffset }}
						/>
					</svg>
					<img
						className="audio-bubble__image"
						src={this.props.image}
						alt={this.props.title}
					/>
					{ !this.props.active &&
					<svg className="audio-bubble__play" viewBox="0 0 109.4 124.5">
						<path
							fill="#fff"
							d="M106.4 57L9 .8C5-1.5 0 1.4 0 6v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.4 4-8.2 0-10.5z"
						/>
					</svg>
					}
					{ this.props.active &&
					<svg className="audio-bubble__pause" viewBox="0 0 120.2 124.5">
						<path
							fill="#fff"
							d="M114.2 124.5c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6h-36c-3.3 0-6 2.7-6 6v112.5c0 3.3 2.7 6 6 6h36zM42 124.5c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6H6C2.7 0 0 2.7 0 6v112.5c0 3.3 2.7 6 6 6h36z"
						/>
					</svg>
					}
				</button>
				<figcaption className="audio-bubble__meta">
					<h1 className="audio-bubble__title">{this.props.title}</h1>
					<h2 className="audio-bubble__subtitle">{this.props.subtitle}</h2>
				</figcaption>
			</figure>
		);
	}
}

AudioBubble.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string,
	audio: PropTypes.string,
	active: PropTypes.bool,
	onComplete: PropTypes.func,
	setActive: PropTypes.func,
};
