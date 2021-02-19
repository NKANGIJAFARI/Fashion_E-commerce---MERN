import React from 'react';
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
			items={4}
			margin={10}
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
			}}
			nav>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/main-bg.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item' style={{ width: '150px', height: '150PX' }}>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item'>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item'>
				<img src='/images/tre4.jpg' alt='' />
			</div>
			<div class='item'>
				<img src='/images/tre4.jpg' alt='' />
			</div>
		</OwlCarousel>
	);
};

export default Carousel;
