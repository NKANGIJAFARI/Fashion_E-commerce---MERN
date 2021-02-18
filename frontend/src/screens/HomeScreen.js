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
import ShoesSideBanner from '../components/Home components/ShoesSideBanner';
import LatestProducts from '../components/Home components/LatestProducts';

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

	return (
		<section className='home'>
			<Meta />
			{!keyword ? (
				<>
					<FirstDisplay />
					<ServicePromise />
					<TrendingFashions />
					<LatestProducts match={match} />
					<HobbiesFashion />
					<GirlBanner />
					<MostViewed />
					<ShoesSideBanner />
					<Categories />
					<ProductCarousel />
				</>
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			<h1>Latest Products</h1>
		</section>
	);
};

export default HomeScreen;
