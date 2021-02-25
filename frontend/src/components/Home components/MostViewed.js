import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

const MostViewed = () => {
	const [pictureSrc, setPicture] = useState('images/watch1.png');
	const [active, setActive] = useState('1');

	return (
		<section className='section section__mostViewed feature' id='featured'>
			<SectionHeading desc='Most viewed product' />

			<div className='row'>
				<div className='image-container'>
					<div className='big-image'>
						<img src={pictureSrc} alt='' />
					</div>
					<div className='small-image'>
						<img
							id='1'
							className={active === '1' ? 'image-active' : ''}
							src='images/watch1.png'
							alt='mostViewed'
							onClick={(e) => {
								setActive(e.target.id);
								setPicture('/images/watch1.png');
							}}
						/>
						<img
							id='2'
							className={active === '2' ? 'image-active' : ''}
							src='/images/watch2.png'
							alt='mostViewed'
							onClick={(e) => {
								setActive(e.target.id);
								setPicture('/images/watch2.png');
							}}
						/>
						<img
							id='3'
							className={active === '3' ? 'image-active' : ''}
							src='/images/watch3.png'
							alt='mostViewed'
							onClick={(e) => {
								setActive(e.target.id);
								setPicture('/images/watch3.png');
							}}
						/>
						<img
							id='4'
							className={active === '4' ? 'image-active' : ''}
							src='/images/watch4.png'
							alt='mostViewed'
							onClick={(e) => {
								setActive(e.target.id);
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
					$299 <span>$450</span>{' '}
				</strong>
				<Link to='/'>
					<button className='btn'>buy now</button>
				</Link>
			</div>
		</>
	);
};
export default MostViewed;
