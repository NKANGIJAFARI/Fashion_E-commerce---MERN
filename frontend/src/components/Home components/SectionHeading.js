import React from 'react';

const SectionHeading = ({ desc }) => {
	return (
		<div className='sectionHeading'>
			<div className='sectionHeading__line'></div>
			<h2 className='sectionHeading__h2'>{desc}</h2>
			<div className='sectionHeading__line'></div>
		</div>
	);
};

export default SectionHeading;
