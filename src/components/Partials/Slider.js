import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Slide from './Slide';
import Dots from './Dots';
import Autoplay from './Autoplay';
import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';
import {
	sliderFetchImages,
	sliderToggleAutoplay,
	sliderGoToNextSlide,
	sliderGoToPrevSlide,
	sliderDotClick,
	sliderToggleInterval,
} from '../../actions/slider';
import { apiPrefix } from '../../../server/config.json';
import '../../css/slider.css';

export class Slider extends Component {
	componentDidMount() {
		if (this.props.images.length === 0) {
			this.props.fetchData(`${apiPrefix}/images`);
		}
	}

	componentWillUnmount() {
		if (this.props.autoplay) {
			const {
				toggleAutoplay,
				interval,
				toggleInterval,
			} = this.props;

			toggleAutoplay();
			const x = window.clearInterval(interval);
			toggleInterval(x);
		}
	}

	renderSlides() {
		const { images } = this.props;
		const slides = [];

		for (let i = 0; i < images.length; i += 1) {
			slides.push(<Slide key={i} image={images[i].image} />);
		}

		return slides;
	}

	slideWidth = () => {
		const slide = document.querySelector('.slide');
		return slide.clientWidth;
	}

	componentDidUpdate = (prevProps) => {
		const {
			autoplay,
			goToNextSlide,
			toggleInterval,
			interval,
		} = this.props;
		if (autoplay && prevProps.autoplay !== autoplay) {
			const x = window.setInterval(() => {
				const {
					index,
					images,
					translateValue,
				} = this.props;
				goToNextSlide({
					index,
					images,
					translateValue,
					slideWidth: this.slideWidth(),
				});
			}, 5000);

			toggleInterval(x);
		} else if (!autoplay && prevProps.autoplay !== autoplay) {
			const x = window.clearInterval(interval);
			toggleInterval(x);
		}
	}

	render() {
		const {
			images, index, translateValue, autoplay,
			goToPreviousSlide, goToNextSlide,
			handleDotClick, toggleAutoplay,
		} = this.props;
		const slides = this.renderSlides();
		return (
			<div className="slider">
				<div className="slider-wrapper"
					style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 0.45s',
					}}>
					{ slides }
				</div>

				<Autoplay toggle={() => toggleAutoplay()}
					autoplay={autoplay}
				/>

				<Dots
					index={index}
					slideWidth={this.slideWidth}
					quantity={images.length}
					translateValue={translateValue}
					dotClick={handleDotClick} />

				<SliderLeftArrow prevSlide={
					() => goToPreviousSlide({
						index,
						translateValue,
						slideWidth: this.slideWidth(),
					})
				} />
				<SliderRightArrow nextSlide={
					() => goToNextSlide({
						index,
						images,
						translateValue,
						slideWidth: this.slideWidth(),
					})}
				/>
			</div>
		);
	}
}

Slider.propTypes = {
	images: PropTypes.array,
	fetchData: PropTypes.func,
	autoplay: PropTypes.bool,
	goToNextSlide: PropTypes.func,
	toggleAutoplay: PropTypes.func,
	goToPreviousSlide: PropTypes.func,
	handleDotClick: PropTypes.func,
	toggleInterval: PropTypes.func,
	interval: PropTypes.any,
	index: PropTypes.number,
	translateValue: PropTypes.number,
};

const mapStateToProps = state => ({
	images: state.sliderState.images,
	hasErrored: state.sliderState.hasErrored,
	isLoading: state.sliderState.isLoading,
	autoplay: state.sliderState.autoplay,
	index: state.sliderState.index,
	translateValue: state.sliderState.translateValue,
	interval: state.sliderState.interval,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(sliderFetchImages(url)),
	toggleAutoplay: () => dispatch(sliderToggleAutoplay()),
	goToNextSlide: (payload) => {
		const { images, slideWidth } = payload;
		let { index, translateValue } = payload;

		if (index === images.length - 1) {
			return dispatch(sliderGoToNextSlide({
				translateValue: 0,
				index: 0,
			}));
		}

		dispatch(sliderGoToNextSlide({
			translateValue: translateValue -= slideWidth,
			index: index += 1,
		}));
	},
	goToPreviousSlide: (payload) => {
		const { slideWidth } = payload;
		let { index, translateValue } = payload;
		if (index === 0) {
			return;
		}

		dispatch(sliderGoToPrevSlide({
			translateValue: translateValue += slideWidth,
			index: index -= 1,
		}));
	},
	handleDotClick: (payload) => {
		const { slideWidth, i, index } = payload;
		let { translateValue } = payload;
		if (i === index) {
			return;
		}
		if (i > index) {
			dispatch(sliderDotClick({
				index: i,
				translateValue: -(i * slideWidth),
			}));
		} else {
			dispatch(sliderDotClick({
				index: i,
				translateValue: translateValue += ((index - i) * slideWidth),
			}));
		}
	},
	toggleInterval: interval => dispatch(sliderToggleInterval(interval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
