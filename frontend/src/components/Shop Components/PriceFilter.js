import React from 'react';

const PriceFilter = () => {
	return (
		<>
			<div className='checkboxes'>
				<CheckBox label='0 - $100' id='100' defaultValue={100} name='100' />
				<CheckBox label='101 - $200' id='200' defaultValue={200} name='200' />
				<CheckBox label='201 - $300' id='300' defaultValue={300} name='300' />
			</div>
			<form className='price__inputs'>
				<input type='number' name='minPrice' id='' />
				to
				<input type='number' name='maxPrice' id='' />
				<input type='submit' defaultValue='Submit' />
			</form>
			<br />
			<br />
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

export default PriceFilter;
