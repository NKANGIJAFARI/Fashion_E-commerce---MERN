import React from 'react';

const BrandFilter = () => {
	return (
		<>
			<div className='filter__brand'>
				<CheckBox
					name='addidas'
					defaultValue='addidas'
					id='addidas'
					label='Addidas'
				/>
				<CheckBox name='nike' defaultValue='nike' id='nike' label='Nike' />
				<CheckBox name='puma' defaultValue='puma' id='puma' label='Puma' />
			</div>
		</>
	);
};

const CheckBox = ({ name, defaultValue, id, label }) => {
	return (
		<>
			<input
				type='checkbox'
				id={id}
				name={name}
				defaultValue={defaultValue}
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<label htmlFor={id}> {label}</label>
			<br />
		</>
	);
};

export default BrandFilter;
