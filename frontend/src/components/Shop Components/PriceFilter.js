import React from 'react';

const PriceFilter = () => {
	return (
		<div className='filter__price'>
			<CheckBox label='0 - $100' id='100' defaultValue={100} name='100' />
			<CheckBox label='101 - $200' id='200' defaultValue={200} name='200' />
			<CheckBox label='201 - $300' id='300' defaultValue={300} name='300' />

			<form className='price__inputs'>
				<input type='number' name='minPrice' id='minPrice' placeholder='Min' />
				to
				<input type='number' name='maxPrice' id='max-price' placeholder='Max' />
				<button type='submit'>Apply</button>
			</form>
		</div>
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
				className='filter__price--input'
			/>
			<label htmlFor={id} className='filter__price--label'>
				{label}
			</label>
			<br />
		</>
	);
};

export default PriceFilter;
