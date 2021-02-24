import React from 'react';

import { Link } from 'react-router-dom';
import Rating from '../Rating';

const ProductCard = ({ product }) => {
	//=================================================================================
	//Function to add to cart
	const addToCartHandler = (productId) => {
		// history.push(`/cart/${match.params.id}?quantity=${quantity}`);
		// <Button
		// 	onClick={addToCartHandler}
		// 	className='btn-block'
		// 	type='button'
		// 	disabled={product.countInStock === 0}>
		// 	Add to Cart
		// </Button>;

		console.log(productId);
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
					<Link
						to='/'
						className='productCard__options--link'
						onClick={() => {
							addToCartHandler(product._id);
						}}
						disabled={product.countInStock === 0}>
						<i className='fas fa-cart-plus'></i>
					</Link>
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
