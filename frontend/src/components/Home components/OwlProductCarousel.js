import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './ProductCard';

const OwlProductCarousel = ({ products }) => {
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
					items: 2,
				},
				1000: {
					items: 4,
				},
				1250: {
					items: 5,
				},
			}}
			nav>
			{products.map((product) => (
				<div class='item'>
					<ProductCard product={product} />
				</div>
			))}
		</OwlCarousel>
	);
};

export default OwlProductCarousel;
