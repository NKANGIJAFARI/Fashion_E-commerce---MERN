import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Rating from '../Rating';

import { addToCart } from '../../actions/cartActions';

const ProductCard = ({ product }) => {
	const [productId, setProductId] = useState(null);
	//const [quantity, setQuantity] = useState(1);
	// let history = useHistory();
	const dispatch = useDispatch();

	//Get whatever is in th cart.
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	//=================================================================================
	//Function to add to cart
	/* I will use useEffect hook to check whether the id of product id 
	has changed and whenever it does i dispatch addToCart action */

	// useEffect(() => {
	// 	if (productId !== null) {
	// 		dispatch(addToCart(productId, 1));
	// 	}
	// }, [dispatch, productId]);

	//Change product id on a click on cart
	const addToCartHandler = (id) => {
		let quantity = 1;
		const existItem = cartItems.find((x) => x.product === id);

		if (existItem && existItem !== 0) {
			quantity = existItem.quantity + 1;
		}
		dispatch(addToCart(id, quantity));
	};
	//----------------------------------------------------------------------------

	return (
		<div className='productCard'>
			<div className='productCard__imgWrapper'>
				<img src={product.image} alt='' className='productCard__inner--image' />
			</div>

			<div className='productCard__details'>
				<span className='productCard__details--price'>$ {product.price}</span>

				<Link to={`/products/${product._id}`}>
					<h4 className='productCard__details--name'>{product.name} </h4>
				</Link>

				<div className='productCard__details--ratingWrapper'>
					<Rating
						value={product.rating}
						text={` ${product.rating}/${product.numReviews}rev`}
					/>
				</div>
			</div>

			<ul className='productCard__options'>
				<li>
					<Link
						to={`/products/${product._id}`}
						className='productCard__options--link'>
						<i className='far fa-eye'></i>
					</Link>
				</li>

				<li>
					<button
						className='productCard__options--link'
						onClick={() => {
							addToCartHandler(product._id);
						}}
						disabled={product.countInStock === 0}>
						<i className='fas fa-cart-plus'></i>
					</button>
				</li>

				<li>
					<Link to='/' className='productCard__options--link'>
						<i className='far fa-heart'></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProductCard;
