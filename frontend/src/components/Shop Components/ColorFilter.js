import React from 'react';

const ColorFilter = () => {
	return (
		<>
			<div className='checkboxes checkboxes__colorFilter'>
				<CheckBox
					name='red'
					id='red'
					defaultValue='red'
					label='Red'
					bgColor='red'
				/>
				<CheckBox
					name='green'
					id='green'
					defaultValue='green'
					label='Green'
					bgColor='green'
				/>
				<CheckBox
					name='maroon'
					id='maroon'
					defaultValue='maroon'
					label='Maroon'
					bgColor='maroon'
				/>
				<CheckBox
					name='black'
					id='black'
					defaultValue='black'
					label='Black'
					bgColor='black'
				/>
				<CheckBox
					name='blue'
					id='blue'
					defaultValue='blue'
					label='Blue'
					bgColor='blue'
				/>
				<CheckBox
					name='grey'
					id='grey'
					defaultValue='grey'
					label='Grey'
					bgColor='grey'
				/>
			</div>
		</>
	);
};

const CheckBox = ({ name, label, defaultValue, id, bgColor }) => {
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
			<label htmlFor={id} style={{ backgroundColor: bgColor }}></label>
			<br />
		</>
	);
};

export default ColorFilter;
