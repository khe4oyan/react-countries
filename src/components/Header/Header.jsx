import React, { useEffect } from 'react'
import s from './Header.module.css';
import { types } from '../../tool/reducer';
import fetchData from '../../api/fetchData';
import { ctx } from '../../App';

export default function Header({ dispatch }) {
	const { text } = React.useContext(ctx);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (text === '') { 
				fetchData.getAllCountries(dispatch);
			} else {
				fetchData.getSearchingAllCountries(text, dispatch);
			}
		}, 700);

		return () => clearTimeout(timer);
	}, [text]);

	const regions = [
		"Oceania",
		"Americas",
		"Africa",
		"Europe",
		"Asia",
		"Antarctic",
	];

	const getRegion = (regionName) => {
		fetchData.getRegionCountries(regionName, dispatch)
	}

	return (
		<header className={`center ${s.header}`}>
			<div>
				<button onClick={() => fetchData.getAllCountries(dispatch)}>all</button>
				{
					regions.map((item, i) =>
					<button onClick={() => getRegion(item)} key={ i }>{ item }</button>
					)
				}
			</div>
			<div>
				<input 
					value={ text }
					onChange={(e) => dispatch({ type: types.TEXT_UPDATE, payload: e.target.value })}
					type="text"
					placeholder='search'
				/>
			</div>
		</header>
	)
}