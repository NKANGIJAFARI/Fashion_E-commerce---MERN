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
				<section
					className='section section__featuredProducts'
					id='featuredProducts'>
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
