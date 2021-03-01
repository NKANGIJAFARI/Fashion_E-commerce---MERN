import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const SizeFilter = () => {
	const [small, setSmall] = useState(false);
	const [large, setLarge] = useState(false);
	const [medium, setMedium] = useState(false);
	const [xLarge, setXLarge] = useState(false);

	let history = useHistory();

	// useEffect(() => {
	// 	if (small) {
	// 		history.push(`/shop/sort/versia`);
	// 	}
	// });

	useEffect(() => {
		const params = new URLSearchParams();

		let sizeString = '';

		sizeString = small ? `${sizeString + '-S'}` : sizeString;
		sizeString = medium ? `${sizeString + '-M'}` : sizeString;
		sizeString = large ? `${sizeString + '-L'}` : sizeString;
		sizeString = xLarge ? `${sizeString + '-X'}` : sizeString;

		params.append('sizes', sizeString);

		history.push({ search: params.toString() });
	}, [small, history, large, medium, xLarge]);

	return (
		<>
			<div className='filter__size'>
				<input
					type='checkbox'
					id='s'
					name='s'
					defaultValue='small'
					onChange={(e) => setSmall(!small)}
				/>
				<label
					htmlFor='s'
					className={small ? 'filter__size--label-active' : ''}>
					S
				</label>
				<br />
				<>
					<input
						type='checkbox'
						name='M'
						id='m'
						defaultValue='medium'
						onChange={(e) => setMedium(!medium)}
					/>

					<label
						htmlFor='m'
						className={medium ? 'filter__size--label-active' : ''}>
						M
					</label>
					<br />
				</>

				<>
					<input
						type='checkbox'
						name='l'
						id='l'
						defaultValue='large'
						onChange={(e) => setLarge(!large)}
					/>
					<label
						htmlFor='l'
						className={large ? 'filter__size--label-active' : ''}>
						L
					</label>
					<br />
				</>

				<>
					<input
						type='checkbox'
						name='xl'
						id='xl'
						defaultValue='xLarge'
						onChange={(e) => {
							setXLarge(!xLarge);
						}}
					/>
					<label
						htmlFor='xl'
						className={xLarge ? 'filter__size--label-active' : ''}>
						XL
					</label>
					<br />
				</>
			</div>
		</>
	);
};

// const CheckBox = ({ name, label, defaultValue, id }) => {
// 	const [label, setLabel] = useState(false);
// 	return (
// 		<>
// 			<input
// 				type='checkbox'
//
// 				name={name}
// 				defaultValue={defaultValue}
// 				className={}
// 				onChange={(e) => setfilter__size--label-Active(true)}
// 			/>
// 			<label htmlFor={id}> {label}</label>
// 			<br />
// 		</>
// 	);
// };

export default SizeFilter;
