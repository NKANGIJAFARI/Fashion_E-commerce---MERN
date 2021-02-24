import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Paginate from '../Paginate';
import Message from '../Message';
import Loader from '../Loader';

import ProductCard from './ProductCard';

import { listProducts } from '../../actions/productActions';
import SectionHeading from './SectionHeading';

const LatestProducts = () => {
	//We get the params on the url, the keyword searched if in search
	//product mode and the pagenumber if product pages are changed
	const { keyword, pageNumber } = useParams();
	const pageNum = pageNumber || 1;

	const dispatch = useDispatch();

	//We use a useSelector to select which part of the global state we need to use

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNum));
	}, [dispatch, keyword, pageNum]);

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
			<Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
		</section>
	);
};

export default LatestProducts;
