import React from 'react';

const GenderFilter = () => {
	return (
		<form className='filter__gender'>
			<input
				type='radio'
				id='men'
				name='gender'
				defaultValue='men'
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<label htmlFor='men'> Men</label>
			<br />
			<input
				type='radio'
				id='women'
				name='gender'
				defaultValue='women'
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<label htmlFor='women'> Women</label>
			<br />
		</form>
	);
};

export default GenderFilter;
