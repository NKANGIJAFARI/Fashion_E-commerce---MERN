import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from './ProductCard';

///===========================================================================
//Use this products data at the moment but after designing the frontend,
//Develop an api to take this data from the api according to what products
//Admin wants to show on the page as featured
const products = [
	{
		name: 'Women suit',
		image: '/images/cloth1.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		category: 'women',
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Floral dress',
		image: '/images/cloth2.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Florsh',
		category: 'women',
		price: 89.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8,
	},

	{
		name: 'Women sitian',
		image: '/images/cloth3.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Derio',
		category: 'women',
		price: 120.99,
		countInStock: 4,
		rating: 3,
		numReviews: 12,
	},
	{
		name: 'Women formal',
		image: '/images/cloth4.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'redies',
		category: 'women',
		price: 57.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'Crioton shirts',
		image: '/images/shirt1.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Amad',
		category: 'men',
		price: 115.99,
		countInStock: 8,
		rating: 4,
		numReviews: 12,
	},
	{
		name: 'V-sided shirts',
		image: '/images/shirt2.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Brady',
		category: 'men',
		price: 115.99,
		countInStock: 8,
		rating: 4.5,
		numReviews: 17,
	},
	{
		name: 'Men Sweater Pants',
		image: '/images/fet-man-trouser.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'sweaterPants',
		category: 'men',
		price: 79.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'Derken Denim Shirts',
		image: '/images/fet-man-shirt.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'polo',
		category: 'men',
		price: 69.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'Polo slicky shirts',
		image: '/images/fet-man-shirt.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'polo',
		category: 'men',
		price: 79.99,
		countInStock: 11,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: "Full Men's Formal",
		image: '/images/gentlejeans.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'polo',
		category: 'men',
		price: 99.99,
		countInStock: 13,
		rating: 4,
		numReviews: 10,
	},
	{
		name: "Men's Office Wear",
		image: '/images/gentlejeans.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'polo',
		category: 'men',
		price: 58.99,
		countInStock: 30,
		rating: 5,
		numReviews: 5,
	},
	{
		name: 'Women Suit',
		image: '/images/human-ladysuit.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'redies',
		category: 'women',
		price: 57.99,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'Women Leather color jackets',
		image: '/images/jacket.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'lethearers',
		category: 'women',
		price: 126.99,
		countInStock: 8,
		rating: 3.5,
		numReviews: 12,
	},
	{
		name: 'Men cotton jackets',
		image: '/images/jacket4.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'lethearers',
		category: 'men',
		price: 126.99,
		countInStock: 8,
		rating: 4,
		numReviews: 12,
	},
	{
		name: 'Men cotton jackets',
		image: '/images/jacket4.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'lethearers',
		category: 'men',
		price: 126.99,
		countInStock: 8,
		rating: 4,
		numReviews: 12,
	},
	{
		name: 'Men Suit',
		image: '/images/mansuit.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Amad',
		category: 'men',
		price: 126.99,
		countInStock: 8,
		rating: 4,
		numReviews: 12,
	},
	{
		name: 'Men Suit',
		image: '/images/mansuit.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Amad',
		category: 'men',
		price: 126.99,
		countInStock: 8,
		rating: 4,
		numReviews: 12,
	},
	{
		name: 'Gradient shirts',
		image: '/images/shirt3.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Brady',
		category: 'men',
		price: 109.99,
		countInStock: 8,
		rating: 4.5,
		numReviews: 17,
	},
];

//----------------------------------------------------------------------------------

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
			{products.map((product) => (
				<div class='item'>
					<ProductCard product={product} />
				</div>
			))}

			<OwlCarouselItem imageSrc='/images/tre3.jpg' />
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
