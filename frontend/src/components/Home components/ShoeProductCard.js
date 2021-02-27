import React from 'react';
import { Link } from 'react-router-dom';

const ShoeProductCard = () => {
	return (
		<div
			style={{
				padding: '10px 10px 8rem 10px',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<ShoeCard
				boxNum='box-1'
				price='110'
				usage='Support shoes'
				brand='Nike Air'
				alt='Nike Air'
				imgSrc='/images/1.png'
			/>

			<ShoeCard
				imgSrc='/images/3.png'
				boxNum='box-3'
				price='199'
				usage='Support shoes'
				brand='Nike Air'
			/>

			<ShoeCard
				imgSrc='/images/2.png'
				boxNum='box-2'
				price='299'
				usage='Support shoes'
				brand='Nike Air'
			/>
		</div>
	);
};

const ShoeCard = ({ boxNum, price, imgSrc, usage, brand }) => {
	return (
		<div className={boxNum}>
			{/*price*/}
			<Link to='/' className='price'>
				${price}
			</Link>
			{/*detail*/}
			<div className='product-img'>
				<img src={imgSrc} alt={brand} />
			</div>
			<div className='detail'>
				<div className='type'>
					{/*icon*/}
					<img className='icon' src='/images/nike-logo.png' alt='nike logo' />
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
export default ShoeProductCard;
