import React from 'react';

const PriceFilter = () => {
	return (
		<form>
			<div className='checkboxes'>
				<input
					type='checkbox'
					id='vehicle1'
					name='vehicle1'
					defaultValue='Bike'
				/>
				<label htmlFor='vehicle1'> I have a bike</label>
				<br />
				<input
					type='checkbox'
					id='vehicle2'
					name='vehicle2'
					defaultValue='Car'
				/>
				<label htmlFor='vehicle2'> I have a car</label>
				<br />
				<input
					type='checkbox'
					id='vehicle3'
					name='vehicle3'
					defaultValue='Boat'
				/>
				<label htmlFor='vehicle3'> I have a boat</label>
			</div>
			<div className='price__inputs'>
				<input type='number' name='minPrice' id='' />
				to
				<input type='number' name='maxPrice' id='' />
			</div>
			<br />
			<br />
			<input type='submit' defaultValue='Submit' />
		</form>
	);
};

export default PriceFilter;
