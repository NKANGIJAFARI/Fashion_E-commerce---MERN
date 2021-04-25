import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listShoesProducts } from '../../actions/productActions';
import OwlProductCarousel from './OwlProductCarousel';
import { Tabs, Tab } from 'react-bootstrap';
import SectionHeading from './SectionHeading';
import ShoesSideBanner from './ShoesSideBanner';
import ShoeProductCard from './ShoeProductCard';
import Loader from '../Loader';
import Message from '../Message';

const ShoesDisplay = () => {
	const [key, setKey] = useState('men');

	const dispatch = useDispatch();

	const productShoes = useSelector((state) => state.productShoes);
	const { products, error, loading } = productShoes;

	let womenShoes;
	let menShoes;
	let kidsShoes;
	if (products && products.length) {
		womenShoes = products.filter((product) => product.category === 'men women');

		menShoes = products.filter((product) => product.category === 'men women');
		kidsShoes = products.filter((product) => product.category === 'men shoes');
	}

	useEffect(() => {
		dispatch(listShoesProducts());
	}, [dispatch]);

	return (
		<section className='section section__featuredProducts'>
			<ShoesSideBanner />
			<SectionHeading desc='shoes showroom' />
			<ShoeProductCard />
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab eventKey='women' title='Women'>
						{womenShoes && womenShoes.length !== 0 ? (
							<OwlProductCarousel products={womenShoes} />
						) : (
							<h2>Sorry, there are no featured for kids today</h2>
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
			)}
		</section>
	);
};

export default ShoesDisplay;
