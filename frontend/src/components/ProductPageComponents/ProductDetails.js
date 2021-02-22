import React, { useState } from 'react';

const ProductDetails = () => {
	const [pictureSrc, setPicture] = useState('/images/gal1.png');
	return (
		<div className='small-container single-product'>
			<img src={pictureSrc} alt='' width='100%' id='ProductImg' />
			<div className='small-img-row'>
				<div className='small-img-col'>
					<img
						src='/images/gal1.png'
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
		</div>
	);
};

export default ProductDetails;
