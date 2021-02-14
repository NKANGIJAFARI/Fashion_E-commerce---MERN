import React from 'react';
import ControlledTabs from './Tabs';

import SectionHeading from './SectionHeading';

const GentlemanFashion = () => {
	return (
		<section className='section section__gentle'>
			<SectionHeading desc='Trending Fashions' />
			<div className='gentle'>
				<div className='gentle__image--wrapper'>
					<img src='/images/gentlesuit.png' alt='Gentleman jfashions' />
				</div>

				<div>
					<ControlledTabs />
				</div>
			</div>
		</section>
	);
};

export default GentlemanFashion;
