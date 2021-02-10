import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
			<input
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				className='mr-sm-2 ml-sm-5 searchForm__input'
				placeholder='search Products ...'></input>
			<button type='submit' className='p-2 searchForm__button'>
				Search
			</button>
		</form>
	);
};

export default SearchBox;
