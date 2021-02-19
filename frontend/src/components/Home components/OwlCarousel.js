import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
	return (
		<OwlCarousel
			className='owl-theme'
			autoplay
			autoplayTimeout={5000}
			autoplayHoverPause
			loop
			items={5}
			margin={2}
			responsive={{
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 5,
				},
				1200: {
					items: 5,
				},
			}}
			nav>
			<OwlCarouselItem imageSrc='/images/tre.jpg' />
		</OwlCarousel>
	);
};

const OwlCarouselItem = ({ imageSrc }) => {
	return (
		<div class='item'>
			<img src={imageSrc} alt='' />
			<ul>
				<li>
					<Link to='/'>
						<i class='far fa-eye'></i>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<i class='far fa-heart'></i>
					</Link>
				</li>
				<li>
					<Link to='/'>
						<i class='fas fa-sync'></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Carousel;
