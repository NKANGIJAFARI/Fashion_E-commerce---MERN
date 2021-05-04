import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';
const SearchBox = ({ history, showOrHide }) => {
	const [keyword, setKeyword] = useState();
	const [showOrHideSearch, setSearchStatus] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/shop/search/${keyword}`);
		} else {
			history.push('/shop');
		}
	};

	const handleShowSearchBar = () => {
		setSearchStatus(!showOrHideSearch);
	};

	useEffect(() => {
		/*Whenever the search input is shown,  it will cover some elements on the page,
		so if the user doesnt start typing in anything to the input, we shall close the 
		search input and only display the search icon*/
		if (!keyword && showOrHideSearch) {
			setTimeout(() => {
				setSearchStatus(false);
			}, 6000);
		}
	}, [keyword, showOrHideSearch]);

	// useEffect(() => {
	// 	console.log('all');
	// });

	return (
		<div className='searchForm'>
			{!showOrHideSearch ? (
				<i className='fas fa-search' onClick={handleShowSearchBar}></i>
			) : (
				<form onSubmit={submitHandler}>
					<div className='searchForm__inputGroup'>
						<input
							autocomplete='off'
							type='text'
							name='q'
							onChange={(e) => setKeyword(e.target.value)}
							className='mr-sm-2 ml-sm-5 searchForm__input'
							placeholder='search Products ...'></input>
						<button type='submit' className='p-2 searchForm__button'>
							<i className='fas fa-search'></i>
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default SearchBox;
