import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';
const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState();
	const [showSearch, setShowSearch] = useState(false);
	const [onFocus, setFocused] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword && keyword.length !== 0) {
			history.push(`/shop/search/${keyword}`);
		} else {
			alert('Invalid search key');
		}
	};

	const handleShowSearchBar = () => {
		setShowSearch(!showSearch);
	};

	useEffect(() => {
		/*Whenever the search input is shown,  it will cover some elements on the page,
		so if the user doesnt start typing in anything to the input, we shall close the 
		search input and only display the search icon*/
		if (!keyword && showSearch) {
			setTimeout(() => {
				setShowSearch(false);
			}, 6000);
		}
	}, [keyword, showSearch]);

	const handleFocus = () => {
		console.log('Its in focus');
		setFocused(true);
	};

	return (
		<div className={`searchForm ${showSearch ? 'inputShown' : ''}`}>
			{!showSearch ? (
				<i className='fas fa-search' onClick={handleShowSearchBar}></i>
			) : (
				<form onSubmit={submitHandler}>
					<div className='searchForm__inputGroup'>
						<input
							autocomplete='off'
							type='text'
							name='q'
							onFocus={handleFocus}
							onChange={(e) => setKeyword(e.target.value.trim())}
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
