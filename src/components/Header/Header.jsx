import React, { useEffect } from 'react'
import './Header.css';
import fetchData from '../../api/fetchData';
import { useDispatch, useSelector } from 'react-redux'; 

export default function Header({ regionsRefs }) {
	const dispatch = useDispatch();
	const searchText = useSelector(state => state.search.searchText);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchText !== '') { 
				fetchData.getSearchingAllCountries(searchText, dispatch);
			} else {
				dispatch({ type: 'searchedCountries', payload: []});
			}
		}, 700);

		return () => clearTimeout(timer);
	}, [searchText]);

	const regions = [
		"Oceania",
		"Americas",
		"Africa",
		"Europe",
		"Asia",
		"Antarctic",
	];

	const scrollTo = (ref) => {
		ref.scrollIntoView({ behavior: 'smooth' });
	}

	const getRegion = (regionName) => {
		fetchData.getRegionCountries(regionName, dispatch)
	}

	return (
		<header className='center header'>
			<div>
				{
					regions.map((item, i) =>
						<button onClick={() => scrollTo(regionsRefs[i].current)} key={ i }>{ item }</button>
					)
				}
			</div>
			<div>
				<button onClick={() => dispatch({ type: 'edit', payload: ''})}>All</button>
				<input 
					value={ searchText }
					onChange={(e) => dispatch({ type: 'edit', payload: e.target.value })}
					type="text"
					placeholder='search'
				/>
			</div>
		</header>
	)
}