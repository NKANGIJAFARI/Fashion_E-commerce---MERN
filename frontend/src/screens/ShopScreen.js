import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Loader from '../components/Loader';

import ProductCard from '../components/Home components/ProductCard';

import { listProducts } from '../actions/productActions';
import SectionHeading from '../components/Home components/SectionHeading';
import FilterSideBar from '../components/Shop Components/FilterSideBar';

const ShopScreen = ({ params, history }) => {
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
		<section className='section section__allProducts'>
			<SectionHeading desc='Products' />
			<div style={{ display: 'flex' }}>
				<div className='sidebar' style={{ flex: '0 0 20%' }}>
					<FilterSideBar />
				</div>
				<div className='allProducts__content'>
					<div
						className='AllProducts'
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-around',
						}}>
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
