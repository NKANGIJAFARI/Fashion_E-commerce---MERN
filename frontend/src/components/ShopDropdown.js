import React from 'react';
import { Link } from 'react-router-dom';

const ShopDropdown = () => {
	return (
		<div className='sdropdown'>
			<div className='sdropdown__content'>
				<div className='sdropdown__content--1'>
					<h2>New Trends</h2>
					<ul className='sdropdown__linksWrapper sdropdown__linksWrapper--1'>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
					</ul>
				</div>
				<div className='sdropdown__content--2'>
					<h2>Shop categories</h2>
					<ul className='sdropdown__linksWrapper sdropdown__linksWrapper--2'>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
						<li className='sdropdown__link'>
							<Link to='/shop'>Shop Now</Link>
						</li>
					</ul>
				</div>

				<div className='sdropdown__imageWrapper'>
					<img src='/images/dropdownfam.png' alt='Fashion model' />
				</div>
			</div>
		</div>
	);
};

export default ShopDropdown;
