import React from 'react';

const FirstDisplay = () => {
	return (
		<div className='fullHeader'>
			<div className='fullHeader__imgWrapper'>
				<img src='/images/fitness.png' alt='' />
			</div>
			<div className='fullHeader__inner'>
				<div className='fullHeader__content'>
					<h3 className='fullHeader__suptitle'>new trend</h3>
					<h1 className='fullHeader__title'>collusion</h1>
					<p className='fullHeader__text'>
						An exclusive selection of this season's trends.
					</p>
					<div className='fullHeader__buttons'>
						<button type='button' to='/' className='btn__primary'>
							<i className='fas fa-search-plus'></i> DISCOVER
						</button>
						<button type='button' to='/' className='btn__primary'>
							<i className='fas fa-shopping-cart'></i> SHOP NOW
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstDisplay;
