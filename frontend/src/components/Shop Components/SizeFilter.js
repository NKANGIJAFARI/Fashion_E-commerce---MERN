import React from 'react';

const SizeFilter = () => {
	return (
		<>
			<div className='checkboxes checkboxes__sizeFilter'>
				<CheckBox name='s' id='s' defaultValue='S' label='s' />
				<CheckBox name='m' id='m' defaultValue='M' label='M' />
				<CheckBox name='l' id='l' defaultValue='L' label='L' />
				<CheckBox name='xl' id='xl' defaultValue='XL' label='XL' />
				<CheckBox name='2xl' id='2xl' defaultValue='2XL' label='2XL' />
				<CheckBox name='3xl' id='3xl' defaultValue='3XL' label='3XL' />
			</div>
		</>
	);
};

const CheckBox = ({ name, label, defaultValue, id }) => {
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

export default SizeFilter;
