import React, { useState } from 'react';

const ProductDetails = ({ imgSrc }) => {
	const [pictureSrc, setPicture] = useState(imgSrc);
	const [active, setActive] = useState('1');

	return (
		<div className='small-container single-product'>
			<div className='small-img-row'>
				<div className='small-img-col'>
					<img
						id='1'
						src={imgSrc}
						alt=''
						className={`small-img ${active === '1' ? 'image-active' : ''}`}
						width='100%'
						onMouseOver={(e) => {
							setActive(e.target.id);
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						id='2'
						className={`small-img ${active === '2' ? 'image-active' : ''}`}
						src='/images/gal2.png'
						alt=''
						width='100%'
						onMouseOver={(e) => {
							setActive(e.target.id);
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						id='3'
						className={`small-img ${active === '3' ? 'image-active' : ''}`}
						src='/images/gal3.png'
						alt=''
						width='100%'
						onMouseOver={(e) => {
							setActive(e.target.id);
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						id='4'
						src='/images/gal4.png'
						alt=''
						width='100%'
						className={`small-img ${active === '4' ? 'image-active' : ''}`}
						onMouseOver={(e) => {
							setActive(e.target.id);
							setPicture(e.target.src);
						}}
					/>
				</div>
			</div>
			<div className='single-product__imgwrapper'>
				<img src={pictureSrc} alt='' width='100%' id='ProductImg' />
			</div>
		</div>
	);
};

export default ProductDetails;
