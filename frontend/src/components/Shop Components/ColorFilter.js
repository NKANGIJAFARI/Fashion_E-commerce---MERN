import React from 'react';

const ColorFilter = () => {
	return (
		<form>
			<div className='checkboxes'>
				<input
					type='checkbox'
					id='addidas'
					name='addidas'
					defaultValue='shoes'
				/>
				<label htmlFor='addidas'> Addidas</label>
				<br />
				<input type='checkbox' id='nike' name='nike' defaultValue='Shoes' />
				<label htmlFor='nike'> I have a car</label>
				<br />
				<input type='checkbox' id='puma' name='puma' defaultValue='puma' />
				<label htmlFor='puma'> I have a boat</label>
			</div>
			<br />

			<input type='submit' defaultValue='Submit' />
		</form>
	);
};

export default ColorFilter;
