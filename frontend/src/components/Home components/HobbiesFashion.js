import React from 'react';
import HobbiesItem from './HobbiesItem';

const HobbiesFashion = () => {
	return (
		<section className='section section__hobbies'>
			<div className='hobbies'>
				<HobbiesItem
					imgSrc='/images/hobbies-travel2.png'
					desc='Travel Apparels'
				/>
				<HobbiesItem
					imgSrc='/images/hobbies-try2.png'
					desc='Fitness Apparels'
				/>
			</div>
		</section>
	);
};

export default HobbiesFashion;
