import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import Rating from '../Rating';

import { addToCart } from '../../actions/cartActions';

const ProductCard = ({ product }) => {
	// let history = useHistory();
	const dispatch = useDispatch();
	let history = useHistory();

	//Get whatever is in th cart.
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	//Change product id on a click on cart
	const addToCartHandler = (id, countInStock) => {
		let quantity = 1;
		const existItem = cartItems.find((x) => x.product === id);

		if (existItem) {
			if (existItem.quantity === countInStock) {
				if (
					window.confirm(
						`Only ${countInStock} left in stock are in your cart, proceed to checkout `,
					)
				) {
					history.push('/cart');
				}
				return;
			}
		}

		/* Check if the added item already exists in the cart, and if it does,
		Let the user decide if they need to add it anyways, and then dispatch 
		*/
		if (existItem && existItem !== 0) {
			if (
				window.confirm(
					`Exists ${existItem.quantity}times in your cart, Add anyway `,
				)
			) {
				quantity = existItem.quantity + 1;
			} else {
				quantity = 1;
			}
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
					{product && product.countInStock !== 0 && (
						<div
							className='productCard__options--link'
							onClick={() => {
								addToCartHandler(product._id, product.countInStock);
							}}>
							<i className='fas fa-cart-plus'></i>
						</div>
					)}
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
