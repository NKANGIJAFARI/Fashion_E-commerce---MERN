import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/Home components/ProductCarousel';
import FirstDisplay from '../components/FirstDisplay';

import Categories from '../components/Home components/Categories';
import ServicePromise from '../components/Home components/ServicePromise';
import HobbiesFashion from '../components/Home components/HobbiesFashion';
import TrendingFashions from '../components/Home components/TrendingFashion';
import GirlBanner from '../components/Home components/GirlBanner';
import MostViewed from '../components/Home components/MostViewed';

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	//We use a useSelector to select which part of the global state we need to use

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	var items = [
		{
			image: '/images/manpant.png',
			desc: 'Panties',
			id: 1,
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
		{
			image: '/images/manpant.png',
			desc: 'Panties',
		},
	];
	return (
		<section className='home' style={{ padding: '10px' }}>
			<Meta />
			{!keyword ? (
				<>
					<FirstDisplay />
					<ServicePromise />
					<TrendingFashions />
					<HobbiesFashion />
					<GirlBanner />
					<MostViewed />
					<Categories />
					<ProductCarousel />
				</>
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</section>
	);
};

export default HomeScreen;
