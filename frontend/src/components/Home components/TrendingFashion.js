import React from 'react';
import ControlledTabs from './Tabs';

import SectionHeading from './SectionHeading';

const TrendingFashions = () => {
	return (
		<section className='section section__trending' id='section__trending'>
			<SectionHeading desc='Trending Categories' />
			<ControlledTabs />
		</section>
	);
};

export default TrendingFashions;
