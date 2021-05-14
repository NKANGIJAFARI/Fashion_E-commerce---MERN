import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';
const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState();
	const [showSearch, setShowSearch] = useState(false);
	const [inputFocus, setFocus] = useState(false);

	//Whenever the search bar is submitted with a keyword, this func will run
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

		if (focus) {
			setTimeout(() => {
				setShowSearch(false);
			}, 6000);
		}

		console.log('Show Search', showSearch);
	}, [keyword, showSearch]);

	const manageFocus = (e) => {
		console.log(e, e.type);
		if (e.type === 'focus') {
			setFocus(true);
		} else if (e.type === 'blur') {
			setFocus(false);
		}
	};

	return (
		<div className={`searchForm ${showSearch ? 'inputShown' : ''}`}>
			{!showSearch ? (
				<i className='fas fa-search' onClick={handleShowSearchBar}></i>
			) : (
				<form onSubmit={submitHandler}>
					<div className='searchForm__inputGroup'>
						<input
							autoComplete='off'
							type='text'
							onFocus={(e) => {
								manageFocus(e);
							}}
							onBlur={(e) => {
								manageFocus(e);
							}}
							//onChange={(e) => setKeyword(e.target.value.trim())}
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
