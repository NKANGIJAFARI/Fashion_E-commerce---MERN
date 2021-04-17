import React from 'react';

const Product = ({
	image,
	desc,
	title,
	promotion,
	rating,
	deliveryCost,
	deliveryTime,
}) => {
	return (
		<div className='product' id='product'>
			<div className='product__imgWrapper'>
				<img src={image} alt='' />
			</div>
			<div className='product__details'>
				<div className='product__details--left'>
					<h2>{title}</h2>
					<p>{desc}</p>
					<h6>{deliveryCost}</h6>
					<p>{promotion}</p>
				</div>
				<div className='product__details--right'>
					<span>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
					</span>
					<h6>{desc}</h6>
					<h6>{deliveryTime}</h6>
				</div>
			</div>
		</div>
	);
};

export default Product;
