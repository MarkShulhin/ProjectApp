import React, { Component } from 'react';
import axios from 'axios';
import Slide from './Slide';
import Dots from './Dots';
import Autoplay from './Autoplay';
import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';
import '../../css/slider.css';

export default class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [],
			index: 0,
			translateValue: 0,
			autoplay: false,
		};
	}

	componentDidMount = () => {
		axios.get('assets/images.json')
			.then((res) => {
				this.setState({ images: res.data });
			});
	}

	renderSlides = () => {
		const { images } = this.state;
		const slides = [];

		for (let i = 0; i < images.length; i += 1) {
			slides.push(<Slide key={i} image={images[i].image} />);
		}

		return slides;
	}

	handleDotClick = (i) => {
		if (i === this.state.index) {
			return;
		}

		if (i > this.state.index) {
			this.setState({
				index: i,
				translateValue: -(i * this.slideWidth()),
			});
		}
		this.setState({
			index: i,
			translateValue: this.state.translateValue += ((this.state.index - i) * (this.slideWidth())),
		});
	}

	toggleAutoplay = () => this.setState({ autoplay: !this.state.autoplay })

	componentDidUpdate = (prevProps, prevState) => {
		const { autoplay } = this.state;

		if (autoplay && prevState.autoplay !== autoplay) {
			const x = window.setInterval(() => {
				this.goToNextSlide();
			}, 5000);

			this.setState({ interval: x });
		} else if (!autoplay && prevState.autoplay !== autoplay) {
			const x = window.clearInterval(this.state.interval);
			this.setState({ interval: x });
		}
	}

	render() {
		const {
			images, index, translateValue, autoplay,
		} = this.state;
		return (
			<div className="slider">
				<div className="slider-wrapper"
					style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 0.45s',
					}}>
					{ this.renderSlides() }
				</div>

				<Autoplay toggle={this.toggleAutoplay} autoplay={autoplay} />

				<Dots
					index={index}
					quantity={images.length}
					dotClick={this.handleDotClick} />

				<SliderLeftArrow prevSlide={this.goToPreviousSlide} />
				<SliderRightArrow nextSlide={this.goToNextSlide} />
			</div>
		);
	}

	goToPreviousSlide = () => {
		if (this.state.index === 0) {
			return;
		}

		this.setState({
			translateValue: this.state.translateValue += this.slideWidth(),
			index: this.state.index -= 1,
		});
	}

	goToNextSlide = () => {
		const { images } = this.state;

		if (this.state.index === images.length - 1) {
			return this.setState({
				translateValue: 0,
				index: 0,
			});
		}

		this.setState({
			translateValue: this.state.translateValue -= this.slideWidth(),
			index: this.state.index += 1,
		});
	}

	slideWidth = () => {
		const slide = document.querySelector('.slide');
		return slide.clientWidth;
	}
}
