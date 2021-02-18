import React from 'react';

import { Link } from 'react-router-dom';
import Rating from '../Rating';

const ProductCard = ({ product }) => {
	return (
		<div className='productCard'>
			<div class='productCard__imgWrapper'>
				<Link href='/' class='add-cart'>
					<i class='fas fa-shopping-cart'></i>
				</Link>
				<img src={product.image} alt='' productCard__inner--image />
			</div>

			<div class='productCard__details'>
				<Link to={`/products/${product.id}`}>
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
		</div>
	);
};

export default ProductCard;
