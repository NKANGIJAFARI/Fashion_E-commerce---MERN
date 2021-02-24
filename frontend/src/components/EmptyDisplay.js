import React from 'react';

const EmptyDisplay = () => {
	return (
		<div>
			<div
				className='IconWrapper'
				style={{
					fontSize: '150px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					minHeight: '60vh',
				}}>
				<h3>Your Cart is empty</h3>
				<i
					class='fas fa-shopping-cart'
					style={{
						color: 'grey',
						margin: '3rem 0rem',
					}}></i>
				<button type='button' to='/' className='btn__primary'>
					<i class='fas fa-shopping-cart'></i> SHOP NOW
				</button>
			</div>
		</div>
	);
};

export default EmptyDisplay;
