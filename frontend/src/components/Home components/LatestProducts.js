import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../Message';
import Loader from '../Loader';

import ProductCard from './ProductCard';

import { listLatestProducts } from '../../actions/productActions';
import SectionHeading from './SectionHeading';

const LatestProducts = () => {
	const dispatch = useDispatch();

	//We use a useSelector to select which part of the global state we need to use

	const latestProducts = useSelector((state) => state.productLatest);
	const { loading, error, products } = latestProducts;

	useEffect(() => {
		dispatch(listLatestProducts());
	}, [dispatch]);

	return (
		<section className='section section__latestProducts'>
			<SectionHeading desc='Latest Products' />
			<div className='latestProducts'>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<>
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</>
				)}
			</div>
		</section>
	);
};

export default LatestProducts;
