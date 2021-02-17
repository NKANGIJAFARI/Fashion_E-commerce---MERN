import React from 'react';

const MostViewed = () => {
	return (
		<section className='feature' id='featured'>
			<h1 className='heading'>
				<span> featured product </span>
			</h1>
			<div className='row'>
				<div className='image-container'>
					<div className='big-image'>
						<img src='images/watch1.jpg' alt='' />
					</div>
					<div className='small-image'>
						<img className='image-active' src='images/watch1.jpg' alt='' />
						<img src='images/watch2.jpg' alt='' />
						<img src='images/watch3.jpg' alt='' />
						<img src='images/watch4.jpg' alt='' />
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
