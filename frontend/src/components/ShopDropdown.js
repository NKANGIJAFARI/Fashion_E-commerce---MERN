import React from 'react';
import { Link } from 'react-router-dom';

const ShopDropdown = () => {
	const userInfo = 'Nkangi jafari';
	return (
		<div className='sdropdown'>
			<div className='sdropdown__Links sdropdown__Links--1'>
				<h2>New Trends</h2>
				<ul className='sdropdown__links sdropdown__links--1'>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
				</ul>
			</div>
			<div className='sdropdown__Links sdropdown__Links--2'>
				<h2>Shop categories</h2>
				<ul className='sdropdown__links sdropdown__links--2'>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
					<li>
						<Link className='sdropdown__link'>Shop Now</Link>
					</li>
				</ul>
			</div>

			<div className='sdropdown__imageWrapper'>
				<img src='/images/dropdownpic.png' alt='Fashion model' />
			</div>
		</div>
	);
};

export default ShopDropdown;
