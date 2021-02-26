import React from 'react';

const SectionHeading = ({ desc, marginB }) => {
	return (
		<div className='sectionHeading' style={{ marginBottom: marginB }}>
			<div className='sectionHeading__line'></div>
			<h2 className='sectionHeading__h2'>{desc}</h2>
			<div className='sectionHeading__line'></div>
		</div>
	);
};

export default SectionHeading;
