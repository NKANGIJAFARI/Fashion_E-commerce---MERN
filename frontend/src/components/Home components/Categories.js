import React from 'react';
import { Image } from 'react-router-bootstrap';

//Import images
import menStyles from '../../Images/cat-man.jpg';
import girlStyles from '../../Images/cat-girl.jpg';
import womenStyles from '../../Images/cat-woman.jpg';
import boyStyles from '../../Images/cat-boy.jpg';

const Categories = () => {
	return (
		<div className='section section__categories categories'>
			<div className='categories__desc'>
				<div className='categories__desc-line'></div>
				<h2 className='categories__desc-h2'>Shop by categories</h2>
				<div className='categories__desc-line'></div>
			</div>
			<div className='categories__inner'>
				<div className='categories__item categories__item-1 '>
					<img src={menStyles} alt='' />
				</div>
				<div className='categories__item categories__item-2'>
					<img src={womenStyles} alt='' />
				</div>
				<div className='categories__item categories__item-3'>
					<img src={boyStyles} alt='' />
				</div>
				<div className='categories__item categories__item-4'>
					<img src={girlStyles} alt='' />
				</div>
				<div className='categories__item categories__item-5'>Watches</div>
				<div className='categories__item categories__item-6'>Perfume</div>
				<div className='categories__item categories__item-7'>
					Babies collections
				</div>
				<div className='categories__item categories__item-8'>Perfumes</div>
				<div className='categories__item categories__item-9'>Bags</div>
			</div>
		</div>
	);
};

export default Categories;
