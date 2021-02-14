import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
	return (
		<Carousel interval={4000}>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='/images/men-all.jpg'
					alt='First slide'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='/images/tachen-bg.jpg'
					alt='Third slide'
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='/images/fashionsale.jpg'
					alt='Third slide'
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
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
