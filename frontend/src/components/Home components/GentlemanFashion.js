import React from 'react';

const GentlemanFashion = () => {
	return (
		<section className='section section__gentle'>
			<div className='gentle'>
				<img className='gentle__image' src='/images/gentle suit.png' alt='' />
				<div className='gentle__items--wrapper'>
					<div className='gentle__item gentle__item--1'>Pants</div>
					<div className='gentle__item gentle__item--2'>Suits</div>
					<div className='gentle__item gentle__item--3'>Shoes</div>
					<div className='gentle__item gentle__item--4'>ties</div>
				</div>
			</div>
		</section>
	);
};

export default GentlemanFashion;
