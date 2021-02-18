import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const ProductCard = ({ product }) => {
	return (
		<div className='productCard'>
			<div className='productCard__inner'>
				<Link to={`/products/${product.id}`}>
					<img src={product.image} alt='' productCard__inner--image />
				</Link>
				<Link to={`/products/${product.id}`}>
					<h4 className='productCard__inner--desc'>{product.name} </h4>
				</Link>
				<div className='productCard__inner--ratingWrapper'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</div>
				<p className='productCard__inner--price'>$ {product.price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
