import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HeaderCarousel = () => {
	return (
		<OwlCarousel
			className='owl-theme'
			autoplay
			autoplayTimeout={5000}
			autoplayHoverPause
			loop
			items={1}
			margin={2}
			responsive={{
				0: {
					items: 1,
				},

				600: {
					items: 1,
				},
				700: {
					items: 1,
				},

				1000: {
					items: 1,
				},
			}}
			nav>
			{products.map((product) => (
				<div className='item' key={product._id}></div>
			))}
		</OwlCarousel>
	);
};

export default HeaderCarousel;
