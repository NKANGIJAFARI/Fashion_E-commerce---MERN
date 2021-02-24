import React, { useState } from 'react';
import '../Styles/main.scss';
const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};
	return (
		<form onSubmit={submitHandler} className='searchForm'>
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
	);
};

export default SearchBox;
