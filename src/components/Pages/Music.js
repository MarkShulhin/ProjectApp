import React, { Component } from 'react';
import AudioBubble from '../Partials/AudioBubble';
import '../../css/music.css';

export default class Music extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: null };
	}
	onComplete() {
		this.setState({
			activeIndex: null,
		});
	}
	setActive(i) {
		const index = i === this.state.activeIndex ? null : i;
		this.setState({
			activeIndex: index,
		});
	}
	render() {
		const AUDIO = [
			{
				title: 'Solringen',
				subtitle: 'Wardruna',
				image: '/img/album-cover.jpg',
				audio: '/assets/music/solringen.mp3',
			},
			{
				title: 'Sowelu',
				subtitle: 'Wardruna',
				image: '/img/album-cover.jpg',
				audio: '/assets/music/sowelu.mp3',
			},
			{
				title: 'Fehu',
				subtitle: 'Wardruna',
				image: '/img/album-cover1.jpg',
				audio: '/assets/music/Fehu.mp3',
			},
			{
				title: 'Bjarkan',
				subtitle: 'Wardruna',
				image: '/img/album-cover2.jpg',
				audio: '/assets/music/Bjarkan.mp3',
			},
			{
				title: 'Dagr',
				subtitle: 'Wardruna',
				image: '/img/album-cover1.jpg',
				audio: '/assets/music/Dagr.mp3',
			},
			{
				title: 'Odal',
				subtitle: 'Wardruna',
				image: '/img/album-cover2.jpg',
				audio: '/assets/music/Odal.mp3',
			},
			{
				title: 'Drivande',
				subtitle: 'Wardruna',
				image: '/img/album-cover2.jpg',
				audio: '/assets/music/drivande.mp3',
			},
			{
				title: 'Ehwar',
				subtitle: 'Wardruna',
				image: '/img/album-cover2.jpg',
				audio: '/assets/music/ehwar.mp3',
			},
			{
				title: 'Hagal',
				subtitle: 'Wardruna',
				image: '/img/album-cover2.jpg',
				audio: '/assets/music/hagal.mp3',
			},
			{
				title: 'Heimta thurs',
				subtitle: 'Wardruna',
				image: '/img/album-cover.jpg',
				audio: '/assets/music/heimta-thurs.mp3',
			},
			{
				title: 'Kauna',
				subtitle: 'Wardruna',
				image: '/img/album-cover.jpg',
				audio: '/assets/music/Kauna.mp3',
			},
			{
				title: 'Loyndomsriss',
				subtitle: 'Wardruna',
				image: '/img/album-cover1.jpg',
				audio: '/assets/music/loyndomsriss.mp3',
			},
		];
		return (
			<div className="player">
				<h1 className="player__title">Songs from episodes</h1>
				<div className="player__items">
					{AUDIO.map((audio, i) =>
						<AudioBubble
							active={this.state.activeIndex === i}
							key={audio.title}
							title={audio.title}
							subtitle={audio.subtitle}
							image={audio.image}
							audio={audio.audio}
							setActive={this.setActive.bind(this, i)}
							onComplete={this.onComplete.bind(this)}
						/>)}
				</div>
			</div>
		);
	}
}
