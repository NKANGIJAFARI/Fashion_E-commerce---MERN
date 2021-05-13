import React from 'react';
import HobbiesItem from './HobbiesItem';
import SectionHeading from './SectionHeading';

const HobbiesFashion = () => {
	return (
		<section className='section section__hobbies'>
			<div className='hobbies'>
				<SectionHeading desc='Deal of the week' />
				<div className='hobbies__wrapper'>
					<HobbiesItem
						imgSrc='/images/hobbies-travel2.png'
						desc='Travel Apparels'
					/>
					<HobbiesItem
						imgSrc='/images/hobbies-fitness2.png'
						desc='Fitness Apparels'
					/>
				</div>
			</div>
		</section>
	);
};

export default HobbiesFashion;
