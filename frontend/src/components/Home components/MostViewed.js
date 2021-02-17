import React from 'react';
import SectionHeading from './SectionHeading';

const MostViewed = () => {
	return (
		<section className='feature' id='featured'>
			<SectionHeading desc='Most viewed product' />

			<div className='row'>
				<div className='image-container'>
					<div className='big-image'>
						<img src='/images/watch1.png' alt='' />
					</div>
					<div className='small-image'>
						<img className='image-active' src='images/watch1.png' alt='' />
						<img src='/images/watch2.png' alt='mostViewed' />
						<img src='/images/watch3.png' alt='mostViewed' />
						<img src='/images/watch4.png' alt='mostViewed' />
					</div>
				</div>
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
					<a href='#'>
						<button className='btn'>buy now</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default MostViewed;
