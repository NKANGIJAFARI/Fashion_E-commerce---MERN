import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

const MostViewed = () => {
	const [pictureSrc, setPicture] = useState('images/watch1.png');
	return (
		<section className='feature' id='featured'>
			<SectionHeading desc='Most viewed product' />

			<div className='row'>
				<div className='image-container'>
					<div className='big-image'>
						<img src={pictureSrc} alt='' />
					</div>
					<div className='small-image'>
						<img
							className='image-active'
							src='images/watch1.png'
							alt='mostViewed'
							onClick={() => {
								setPicture('/images/watch1.png');
							}}
						/>
						<img
							src='/images/watch2.png'
							alt='mostViewed'
							onClick={() => {
								setPicture('/images/watch2.png');
							}}
						/>
						<img
							src='/images/watch3.png'
							alt='mostViewed'
							onClick={() => {
								setPicture('/images/watch3.png');
							}}
						/>
						<img
							src='/images/watch4.png'
							alt='mostViewed'
							onClick={() => {
								setPicture('/images/watch4.png');
							}}
						/>
					</div>
				</div>

				<ProductDetails />
			</div>
		</section>
	);
};

const ProductDetails = () => {
	return (
		<>
			<div className='content'>
				<h3>smart watches</h3>
				<div className='stars'>
					<i className='fas fa-star' />
					<i className='fas fa-star' />
					<i className='fas fa-star' />
					<i className='fas fa-star' />
					<i className='fas fa-star' />
					<span>(500+) reviews</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
					at!
				</p>
				<strong className='price'>
					₹1000 <span>₹1500</span>{' '}
				</strong>
				<Link to='/'>
					<button className='btn'>buy now</button>
				</Link>
			</div>
		</>
	);
};
export default MostViewed;
