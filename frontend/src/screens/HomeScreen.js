import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';

import ServicePromise from '../components/Home components/ServicePromise';
import HobbiesFashion from '../components/Home components/HobbiesFashion';
import TrendingFashions from '../components/Home components/TrendingFashion';
import GirlBanner from '../components/Home components/GirlBanner';
import MostViewed from '../components/Home components/MostViewed';
import ShoesDisplay from '../components/Home components/ShoesDisplay';
import LatestProducts from '../components/Home components/LatestProducts';
import FeaturedProducts from '../components/Home components/FeaturedProducts';
import ShopDropdown from '../components/ShopDropdown';
import HeaderCarousel from '../components/Header/HeaderCarousel';

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
		<div className='home home__wrapper'>
			<Meta />
			{!keyword ? (
				<>
					<HeaderCarousel />
					<ShopDropdown />
					<FeaturedProducts />
					{/*<TrendingFashions />
					<LatestProducts />
					<GirlBanner />
					<ShoesDisplay />
					<HobbiesFashion />
					<MostViewed />
					<ServicePromise /> */}
				</>
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
		</div>
	);
};

export default HomeScreen;
