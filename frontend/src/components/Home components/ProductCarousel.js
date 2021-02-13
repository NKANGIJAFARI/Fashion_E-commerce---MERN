import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className='carousel'>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item className='carousel__item'>
					<img
						className='d-block w-100'
						src='/images/tachen-bg.jpg'
						alt='First slide'
					/>
					<div className='carousel__caption'>
						<h3 className='carousel__caption-h3'>First slide label</h3>
						<p className='carousel__caption-p'>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item className='carousel__item'>
					<img
						className='d-block w-100'
						src='/images/tachen-bg.jpg'
						alt='Second slide'
					/>

					<div className='carousel__caption'>
						<h3 className='carousel__caption-h3'>Second slide label</h3>
						<p className='carousel__caption-p'>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item className='carousel__item'>
					<img
						className='d-block w-100'
						src='/images/tachen-bg.jpg'
						alt='Third slide'
					/>

					<div className='carousel__caption'>
						<h3 className='carousel__caption-h3'>Third slide label</h3>
						<p className='carousel__caption-p'>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

// const ProductCarousel = () => {
// 	return (
// 		<Carousel className='carousel'>
// 			<CarouselItem
// 				interval={500}
// 				imgSrc='/images/tachen-bg.jpg'
// 				alt='first image'
// 				h3='Second slide label'
// 				p='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// 			/>
// 			<CarouselItem
// 				interval={500}
// 				imgSrc='/images/tachen-bg.jpg'
// 				alt='first image'
// 				h3='Second slide label'
// 				p='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// 			/>
// 			<CarouselItem
// 				interval={500}
// 				imgSrc='/images/tachen-bg.jpg'
// 				alt='first image'
// 				h3='Second slide label'
// 				p='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// 			/>
// 		</Carousel>
// 	);
// };

export default ProductCarousel;
