import React, { useState } from 'react';
import OwlProductCarousel from './OwlProductCarousel';
import { Tabs, Tab } from 'react-bootstrap';
import SectionHeading from './SectionHeading';
import ShoesSideBanner from './ShoesSideBanner';

///===========================================================================
//Use this products data at the moment but after designing the frontend,
//Develop an api to take this data from the api according to what products
//Admin wants to show on the page as featured
const products = [
	{
		name: 'Women suit',
		image: '/images/shoe1.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		suitableFor: 'men',
		category: 'shoe',
		tags: [],
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Women suit',
		image: '/images/shoe2.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		suitableFor: 'men',
		category: 'shoe',
		tags: [],
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Women suit',
		image: '/images/shoe3.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		suitableFor: 'men',
		category: 'shoe',
		tags: [],
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Women suit',
		image: '/images/shoe4.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		suitableFor: 'men',
		category: 'shoe',
		tags: [],
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Women suit',
		image: '/images/shoe5.png',
		description:
			'Lorem quod asperiores officia quidem quiRem consequuntur reiciendis aut',
		brand: 'Vesia',
		suitableFor: 'men',
		category: 'shoe',
		tags: [],
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
];

//----------------------------------------------------------------------------------
const womenShoes = products.filter(
	(product) => product.suitableFor === 'women'
);
const menShoes = products.filter((product) => product.suitableFor === 'men');
const kidsShoes = products.filter((product) => product.suitableFor === 'kids');

const ShoesDisplay = () => {
	const [key, setKey] = useState('men');

	return (
		<section className='section section__featuredProducts'>
			<SectionHeading desc='Your shoes showroom' />
			<ShoesSideBanner />
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='women' title='Women'>
					{womenShoes && womenShoes.length === 0 ? (
						<OwlProductCarousel products={menShoes} />
					) : (
						<h2>Sorry, there are no featured for women today</h2>
					)}
				</Tab>
				<Tab eventKey='men' title='Men'>
					{menShoes && menShoes.length !== 0 ? (
						<OwlProductCarousel products={menShoes} />
					) : (
						<h2>Sorry, there are no featured for men today</h2>
					)}
				</Tab>
				<Tab eventKey='kids' title='Kids'>
					{kidsShoes && kidsShoes.length === 0 ? (
						<OwlProductCarousel products={menShoes} />
					) : (
						<h2>Sorry, there are no featured for kids today</h2>
					)}
				</Tab>
			</Tabs>
		</section>
	);
};

export default ShoesDisplay;
