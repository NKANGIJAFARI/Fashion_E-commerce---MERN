import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Loader from '../components/Loader';

import ProductCard from '../components/Home components/ProductCard';

import { listProducts } from '../actions/productActions';
import SectionHeading from '../components/Home components/SectionHeading';
import FilterSideBar from '../components/Shop Components/FilterSideBar';

const ShopScreen = () => {
	//We get the params on the url, the keyword searched if in search
	//product mode and the pagenumber if product pages are changed
	const { keyword, pageNumber } = useParams();
	const pageNum = pageNumber || 1;

	//Show or hide filter btn on small screens
	const [showFilters, setShowFilters] = useState(false);

	const toggleFilter = () => {
		setShowFilters(!showFilters);
	};

	//Get the queryStrings to access sizes
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}

	let query = useQuery();
	const sizes = query.get('sizes') ? query.get('sizes') : '';

	//We use a useSelector to select which part of the global state we need to use

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts(keyword, pageNum, sizes));
		console.log(sizes, 'sizes');
	}, [dispatch, keyword, pageNum, sizes]);

	return (
		<section className='section section__allProducts'>
			<SectionHeading desc='Products' />
			<div className='allProducts__filterBtn ' onClick={toggleFilter}>
				<i class='fas fa-filter'></i> <span>Filter</span>
			</div>
			<div className='allProducts__wrapper'>
				<div
					className={`allProducts__sidebar ${showFilters ? 'showFilter' : ''}`}>
					<FilterSideBar />
				</div>
				<div className='allProducts__content'>
					<div className='allProducts__products'>
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
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</div>
			</div>
		</section>
	);
};

export default ShopScreen;
