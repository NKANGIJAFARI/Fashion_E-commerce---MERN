import React from 'react';

const FirstDisplay = ({
	image,
	heading1,
	heading2,
	desc,
	button1,
	button2,
	background,
	styleDescription,
}) => {
	// const color = ;

	return (
		<div className='fullHeader' style={{ background: background }}>
			<div className='fullHeader__inner'>
				<div className='fullHeader__content'>
					<h3 className='fullHeader__suptitle'>{heading1}</h3>
					<h1 className='fullHeader__title'>{heading2}</h1>
					<p className='fullHeader__text'>{desc}</p>
					<div className='fullHeader__buttons'>
						<button type='button' to='/' className='btn__primary'>
							<i className='fas fa-search-plus'></i> {` ${button1}`}
						</button>
						<button type='button' to='/' className='btn__primary'>
							<i className='fas fa-shopping-cart'></i> {` ${button2}`}
						</button>
					</div>
				</div>
			</div>
			<div className='fullHeader__left'>
				<div className='fullHeader__imgWrapper'>
					<img src={image} alt={`pic for ${heading1}`} />
				</div>
				<div className='fullHeader__rotatingText'>
					<p>{styleDescription}</p>
				</div>
				<div className='fullHeader__socialIcons'>
					<i className='fab fa-instagram'></i>
					<i className='fab fa-facebook-f'></i>
					<i className='fab fa-twitter'></i>
				</div>
			</div>
		</div>
	);
};

export default FirstDisplay;
