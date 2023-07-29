import React, { useEffect, useState } from 'react'
import s from './Header.module.css';
import { types } from '../../tool/reducer';

export default function Header({ dispatch }) {
	const [inputValue, setInputValue] = useState('');

	
	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch({ type: types.SEARCH_TEXT, payload: inputValue })
		}, 500);

		return () => clearTimeout(timer);
	}, [inputValue]);

	return (
		<header className={`center ${s.header}`}>
			<button onClick={() => dispatch({ type: types.SHOW_ALL })}>all</button>
			<div>
				<input 
					value={ inputValue }
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					placeholder='search'
				/>
			</div>
		</header>
	)
}