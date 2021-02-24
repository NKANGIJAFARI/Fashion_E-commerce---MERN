import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Meta from '../components/Meta';

import { listProducts } from '../actions/productActions';

import FirstDisplay from '../components/FirstDisplay';

import ServicePromise from '../components/Home components/ServicePromise';
import HobbiesFashion from '../components/Home components/HobbiesFashion';
import TrendingFashions from '../components/Home components/TrendingFashion';
import GirlBanner from '../components/Home components/GirlBanner';
import MostViewed from '../components/Home components/MostViewed';

import ShoesDisplay from '../components/Home components/ShoesDisplay';
import LatestProducts from '../components/Home components/LatestProducts';
import FeaturedProducts from '../components/Home components/FeaturedProducts';

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	//We use a useSelector to select which part of the global state we need to use

	// const productList = useSelector((state) => state.productList);
	// const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<section className='home'>
			<Meta />
			{!keyword ? (
				<>
					<FirstDisplay />
					<FeaturedProducts />
					<TrendingFashions />
					<LatestProducts />

					<GirlBanner />
					<ShoesDisplay />
					<HobbiesFashion />
					<MostViewed />
					<ServicePromise />

					{/* <Categories />
					<ProductCarousel /> */}
				</>
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
		</section>
	);
};

export default HomeScreen;
