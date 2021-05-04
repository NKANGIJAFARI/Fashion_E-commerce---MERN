import React, { useState } from 'react';
import '../Styles/main.scss';
const SearchBox = ({ history, showOrHide }) => {
	const [keyword, setKeyword] = useState();
	const [showOrHideSearch, setSearchStatus] = useState(true);

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

	// useEffect(() => {
	// 	console.log('all');
	// });

	return (
		<div className='searchForm'>
			{showOrHideSearch ? (
				<i className='fas fa-search' onClick={handleShowSearchBar}></i>
			) : (
				<form onSubmit={submitHandler}>
					<div className='searchForm__inputGroup'>
						<input
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
