import React from 'react';

const SizeFilter = () => {
	return (
		<form>
			<div className='checkboxes'>
				<CheckBox name='s' id='s' defaultValue='S' label='s' />
				<CheckBox name='m' id='m' defaultValue='M' label='M' />
				<CheckBox name='l' id='l' defaultValue='L' label='L' />
				<CheckBox name='xl' id='xl' defaultValue='XL' label='XL' />
				<CheckBox name='2xl' id='2xl' defaultValue='2XL' label='2XL' />
				<CheckBox name='3xl' id='3xl' defaultValue='3XL' label='3XL' />
			</div>
			<br />

			<input type='submit' defaultValue='Submit' />
		</form>
	);
};

const CheckBox = ({ name, label, defaultValue, id }) => {
	return (
		<>
			<input type='checkbox' id={id} name={name} defaultValue={defaultValue} />
			<label htmlFor={id}> {name}</label>
			<br />
		</>
	);
};

export default SizeFilter;
