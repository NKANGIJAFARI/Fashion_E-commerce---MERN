import React from 'react';
import ControlledTabs from './Tabs';

import SectionHeading from './SectionHeading';

const GentlemanFashion = () => {
	return (
		<section className='section section__trending'>
			<SectionHeading desc='Trending Fashions' />
			<ControlledTabs />
		</section>
	);
};

export default GentlemanFashion;
