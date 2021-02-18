import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import Paginate from '../Paginate';
import Message from '../Message';
import Loader from '../Loader';
import ProductCard from './ProductCard';

import { listProducts } from '../../actions/productActions';

const LatestProducts = ({ match }) => {
	const { keyword, pageNumber } = useParams();
	const pageNum = pageNumber || 1;

	const dispatch = useDispatch();

	//We use a useSelector to select which part of the global state we need to use

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNum));
		console.log({ products });
	}, [dispatch, keyword, pageNum]);

	return (
		<section className='section section__latestProducts'>
			<div className='latestProducts'>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<>
						{products &&
							products.map((product) => <ProductCard product={product} />)}
					</>
				)}
			</div>
			<Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
		</section>
	);
};

export default LatestProducts;
