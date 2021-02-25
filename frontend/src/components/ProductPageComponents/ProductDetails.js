import React, { useState } from 'react';

const ProductDetails = ({ imgSrc }) => {
	const [pictureSrc, setPicture] = useState(imgSrc);
	return (
		<div className='small-container single-product'>
			<div className='small-img-row'>
				<div className='small-img-col'>
					<img
						src={imgSrc}
						alt=''
						width='100%'
						className='small-img'
						onMouseOver={(e) => {
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						src='/images/gal2.png'
						alt=''
						width='100%'
						className='small-img'
						onMouseOver={(e) => {
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						src='/images/gal3.png'
						alt=''
						width='100%'
						className='small-img'
						onMouseOver={(e) => {
							setPicture(e.target.src);
						}}
					/>
				</div>
				<div className='small-img-col'>
					<img
						src='/images/gal4.png'
						alt=''
						width='100%'
						className='small-img'
						onMouseOver={(e) => {
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
