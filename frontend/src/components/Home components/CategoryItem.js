import React from 'react';

const CategoryItem = ({ itemNo, imgSrc, catName }) => {
	return (
		<div className={`categories__item categories__item-${itemNo}`}>
			{catName && <div className='categories__item-name'>{catName}</div>}
			<img src={imgSrc} alt={catName} />
			<button class='btn-inline'>
				Discover now <span>&rarr;</span>
			</button>
		</div>
	);
};

export default CategoryItem;
