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

const ShoeProductCard = () => {
	return (
		<div
			style={{
				padding: '10px 10px 60px 10px',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<ShoeCard
				imgSrc='/images/1.png'
				boxNum='box-1'
				price='110'
				usage='Support shoes'
			/>
			<div className='box-2'>
				{/*price*/}
				<Link to='#/' className='price'>
					$110
				</Link>
				{/*detail*/}
				<div className='product-img'>
					<img src='/images/2.png' />
				</div>
				<div className='detail'>
					<div className='type'>
						{/*icon*/}
						<img className='icon' src='images/nike-logo.png' />
						{/*type*/}
						<p className='type-heading'>SUPPORT SHOES</p>
					</div>
					{/*detail*/}
					<div className='type-detail'>
						<p>Nike Shoes</p>
						<p>Shoes</p>
					</div>
				</div>
				<div className='cart-btn'>
					<Link to='/'>+</Link>
				</div>
			</div>
			<div className='box-3'>
				{/*price*/}
				<Link to='#/' className='price'>
					$110
				</Link>
				{/*detail*/}
				<div className='product-img'>
					<img src='/images/3.png' />
				</div>
				<div className='detail'>
					<div className='type'>
						{/*icon*/}
						<img className='icon' src='images/nike-logo.png' />
						{/*type*/}
						<p className='type-heading'>SUPPORT SHOES</p>
					</div>
					{/*detail*/}
					<div className='type-detail'>
						<p>Nike Shoes</p>
						<p>Shoes</p>
					</div>
				</div>
				<div className='cart-btn'>
					<Link to='/'>+</Link>
				</div>
			</div>
		</div>
	);
};

export default ShoeProductCard;
