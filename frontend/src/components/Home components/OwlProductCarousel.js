import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './ProductCard';

const OwlProductCarousel = ({ products }) => {
	return (
		<OwlCarousel
			className='owl-theme'
			autoplay
			// autoplayTimeout={5000}
			autoplayTimeout={5000000}
			autoplayHoverPause
			loop
			items={1}
			margin={2}
			responsive={{
				0: {
					items: 2,
				},

				600: {
					items: 3,
				},
				800: {
					items: 4,
				},

				1000: {
					items: 4,
				},
				1100: {
					items: 5,
				},
			}}
			nav>
			{products.map((product) => (
				<div className='item' key={product._id}>
					<ProductCard product={product} />
				</div>
			))}
		</OwlCarousel>
	);
};

export default OwlProductCarousel;
