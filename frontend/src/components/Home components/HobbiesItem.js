import React from 'react';

const HobbiesItem = ({ imgSrc, desc }) => {
	return (
		<div className={`hobbies__item hobbies__item--${desc}`}>
			<img
				className={`hobbies__item--image hobbies__item--image-${desc}`}
				src={imgSrc}
				alt={desc}
			/>
			<button
				className={`btn-inline hobbies__item--btn hobbies__item--btn-${desc.toLowerCase()}`}>
				Discover now <span>&rarr;</span>
			</button>
			{/* <div className={`hobbies__desc hobbies__desc-${desc.toLowerCase()}`}>
				<h2
					className={`hobbies__item--h2 hobbies__item--h2-${desc.toLowerCase()}`}>
					{desc}
				</h2>
			</div> */}
		</div>
	);
};

export default HobbiesItem;
