import React from 'react';

import { Link } from 'react-router-dom';
import Rating from '../Rating';

const ProductCard = ({ product }) => {
	return (
		<div className='productCard'>
			<div class='productCard__imgWrapper'>
				<img src={product.image} alt='' productCard__inner--image />
			</div>

			<div class='productCard__details'>
				<Link to={`/products/${product._id}`}>
					<h4 className='productCard__details--name'>{product.name} </h4>
				</Link>
				<div className='productCard__details--ratingWrapper'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</div>
				<span className='productCard__details--price'>$ {product.price}</span>
			</div>

			<ul className='productCard__options'>
				<li>
					<Link to='/' className='productCard__options--link'>
						<i class='far fa-eye'></i>
					</Link>
				</li>

				<li>
					<Link to='/' className='productCard__options--link'>
						<i class='fas fa-cart-plus'></i>
					</Link>
				</li>
				<li>
					<Link to='/' className='productCard__options--link'>
						<i class='far fa-heart'></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProductCard;
