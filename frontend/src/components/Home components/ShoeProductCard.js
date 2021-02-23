import React from 'react';
import { Link } from 'react-router-dom';

const ShoeProductCard = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div className='box-1'>
				{/*price*/}
				<Link to='#/' className='price'>
					$110
				</Link>
				{/*detail*/}
				<div className='product-img'>
					<img src='/images/1.png' />
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
