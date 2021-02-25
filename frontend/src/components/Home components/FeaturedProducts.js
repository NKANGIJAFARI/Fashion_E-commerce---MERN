import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OwlProductCarousel from './OwlProductCarousel';
import { Tabs, Tab } from 'react-bootstrap';
import SectionHeading from './SectionHeading';
import Loader from '../Loader';
import Message from '../Message';

import { listFeaturedProducts } from '../../actions/productActions';

const FeaturedProducts = () => {
	const [key, setKey] = useState('women');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listFeaturedProducts());
	}, [dispatch]);

	const featured = useSelector((state) => state.productFeatured);
	const { products, error, loading } = featured;

	let womenProducts;
	let menProducts;
	let kidsProducts;
	if (products) {
		womenProducts = products.filter((product) => product.category === 'women');

		menProducts = products.filter((product) => product.category === 'men');
		kidsProducts = products.filter((product) => product.category === 'kids');
	}

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<section className='section section__featuredProducts'>
					<SectionHeading desc='Featured Products' />
					<Tabs
						id='controlled-tab-example'
						activeKey={key}
						onSelect={(k) => setKey(k)}>
						<Tab eventKey='men' title='Men'>
							{menProducts && menProducts.length !== 0 ? (
								<OwlProductCarousel products={menProducts} />
							) : (
								<h2>Sorry, there are no featured for men today</h2>
							)}
						</Tab>
						<Tab eventKey='women' title='Women'>
							{womenProducts && womenProducts.length !== 0 ? (
								<OwlProductCarousel products={womenProducts} />
							) : (
								<h2>Sorry, there are no featured for women today</h2>
							)}
						</Tab>

						<Tab eventKey='kids' title='Kids'>
							{kidsProducts && kidsProducts.length !== 0 ? (
								<OwlProductCarousel products={kidsProducts} />
							) : (
								<h2>Sorry, there are no featured for kids today</h2>
							)}
						</Tab>
					</Tabs>
				</section>
			)}
		</>
	);
};

export default FeaturedProducts;

///===========================================================================
//Use this products data at the moment but after designing the frontend,
//Develop an api to take this data from the api according to what products
//Admin wants to show on the page as featured
// const products = [
// 	{
// 		_id: 1,
// 		name: 'Women suit',
// 		image: '/images/cloth1.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Vesia',
// 		category: 'women',
// 		price: 89.99,
// 		countInStock: 10,
// 		rating: 4.5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 2,
// 		name: 'Floral dress',
// 		image: '/images/cloth2.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Florsh',
// 		category: 'women',
// 		price: 89.99,
// 		countInStock: 7,
// 		rating: 4.0,
// 		numReviews: 8,
// 	},

// 	{
// 		_id: 3,
// 		name: 'Women sitian',
// 		image: '/images/cloth3.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Derio',
// 		category: 'women',
// 		price: 120.99,
// 		countInStock: 4,
// 		rating: 3,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 4,
// 		name: 'Women formal',
// 		image: '/images/cloth4.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'redies',
// 		category: 'women',
// 		price: 57.99,
// 		countInStock: 11,
// 		rating: 5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 5,
// 		name: 'Crioton shirts',
// 		image: '/images/shirt1.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Amad',
// 		category: 'men',
// 		price: 115.99,
// 		countInStock: 8,
// 		rating: 4,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 6,
// 		name: 'V-sided shirts',
// 		image: '/images/shirt2.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Brady',
// 		category: 'men',
// 		price: 115.99,
// 		countInStock: 8,
// 		rating: 4.5,
// 		numReviews: 17,
// 	},
// 	{
// 		_id: 7,
// 		name: 'Men Sweater Pants',
// 		image: '/images/fet-man-trouser.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'sweaterPants',
// 		category: 'men',
// 		price: 79.99,
// 		countInStock: 11,
// 		rating: 5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 8,
// 		name: 'Derken Denim Shirts',
// 		image: '/images/fet-man-shirt.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'polo',
// 		category: 'men',
// 		price: 69.99,
// 		countInStock: 11,
// 		rating: 5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 9,
// 		name: 'Polo slicky shirts',
// 		image: '/images/fet-man-shirt.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'polo',
// 		category: 'men',
// 		price: 79.99,
// 		countInStock: 11,
// 		rating: 4.5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 10,
// 		name: "Full Men's Formal",
// 		image: '/images/gentlejeans.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'polo',
// 		category: 'men',
// 		price: 99.99,
// 		countInStock: 13,
// 		rating: 4,
// 		numReviews: 10,
// 	},
// 	{
// 		_id: 11,
// 		name: "Men's Office Wear",
// 		image: '/images/gentlejeans.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'polo',
// 		category: 'men',
// 		price: 58.99,
// 		countInStock: 30,
// 		rating: 5,
// 		numReviews: 5,
// 	},
// 	{
// 		_id: 12,
// 		name: 'Women Suit',
// 		image: '/images/human-ladysuit.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'redies',
// 		category: 'women',
// 		price: 57.99,
// 		countInStock: 11,
// 		rating: 5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 13,
// 		name: 'Women Leather color jackets',
// 		image: '/images/jacket.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'lethearers',
// 		category: 'women',
// 		price: 126.99,
// 		countInStock: 8,
// 		rating: 3.5,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 14,
// 		name: 'Men cotton jackets',
// 		image: '/images/jacket4.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'lethearers',
// 		category: 'men',
// 		price: 126.99,
// 		countInStock: 8,
// 		rating: 4,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 15,
// 		name: 'Men cotton jackets',
// 		image: '/images/jacket4.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'lethearers',
// 		category: 'men',
// 		price: 126.99,
// 		countInStock: 8,
// 		rating: 4,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 16,
// 		name: 'Men Suit',
// 		image: '/images/mansuit.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Amad',
// 		category: 'men',
// 		price: 126.99,
// 		countInStock: 8,
// 		rating: 4,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 17,
// 		name: 'Men Suit',
// 		image: '/images/mansuit.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Amad',
// 		category: 'men',
// 		price: 126.99,
// 		countInStock: 8,
// 		rating: 4,
// 		numReviews: 12,
// 	},
// 	{
// 		_id: 18,
// 		name: 'Gradient shirts',
// 		image: '/images/shirt3.png',
// 		description:
// 			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
// 		brand: 'Brady',
// 		category: 'men',
// 		price: 109.99,
// 		countInStock: 8,
// 		rating: 4.5,
// 		numReviews: 17,
// 	},
// ];

//----------------------------------------------------------------------------------
