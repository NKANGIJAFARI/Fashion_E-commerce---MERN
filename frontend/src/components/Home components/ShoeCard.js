import React from 'react';
import { Link } from 'react-router-dom';

const ShoeCard = ({ boxNum, price, imgSrc, usage, brand }) => {
	return (
		<div className={boxNum}>
			{/*price*/}
			<Link to='/' className='price'>
				{price}
			</Link>
			{/*detail*/}
			<div className='product-img'>
				<img src={imgSrc} />
			</div>
			<div className='detail'>
				<div className='type'>
					{/*icon*/}
					<img className='icon' src='images/nike-logo.png' />
					{/*type*/}
					<p className='type-heading'>{usage}</p>
				</div>
				{/*detail*/}
				<div className='type-detail'>
					<p>{brand}</p>
				</div>
			</div>
			<div className='cart-btn'>
				<Link to='/'>
					<i className='fas fa-shopping-cart'></i>
				</Link>
			</div>
		</div>
	);
};

export default ShoeCard;
