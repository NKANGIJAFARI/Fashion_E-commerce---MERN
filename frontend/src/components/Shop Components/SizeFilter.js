import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
const SizeFilter = () => {
	const [small, setSmall] = useState(false);
	const [large, setLarge] = useState(false);
	const [medium, setMedium] = useState(false);
	const [xLarge, setXLarge] = useState(false);

	let history = useHistory();
	let location = useLocation();

	// useEffect(() => {
	// 	if (small) {
	// 		history.push(`/shop/sort/versia`);
	// 	}
	// });
	// const params = new URLSearchParams(useLocation().search);

	useEffect(() => {
		const params = new URLSearchParams();
		const paramsUrl = new URLSearchParams(location.search);
		//const sizesArray = params.get('sizes') ? params.get('sizes') : '';

		const sizesArray = paramsUrl.toString().slice(7).split('-');

		const smallExists =
			sizesArray.length !== 0 ? sizesArray.find((x) => x === 's') : false;

		// if (smallExists) {
		// 	setSmall(true);
		// }
		let sizeString = '';

		sizeString = small ? `${sizeString + '-s'}` : sizeString;
		sizeString = medium ? `${sizeString + '-m'}` : sizeString;
		sizeString = large ? `${sizeString + '-l'}` : sizeString;
		sizeString = xLarge ? `${sizeString + '-x'}` : sizeString;

		if (sizeString !== '') {
			params.append('sizes', sizeString);
			console.log({ search: params.toString() });
		}
		history.push({ search: params.toString() });
	}, [location.search, small, history, large, medium, xLarge]);

	//  const search = useLocation().search;
	//const name = new URLSearchParams(search).get('name');
	// const id = new URLSearchParams(search).get('id');
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

export default withRouter(SizeFilter);
