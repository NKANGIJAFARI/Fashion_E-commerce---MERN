import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await axios('/api/products');

			setProducts(res.data);
		};

		fetchProducts();
	});

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;