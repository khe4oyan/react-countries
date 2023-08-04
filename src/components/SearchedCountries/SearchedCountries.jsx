import React, { useEffect } from 'react'
import Country from '../Country/Country'
import './styles.css'
import { useSelector } from 'react-redux';

export default function SearchedCountries({ countriesList }) {
	const [showField, setShowField] = React.useState(false);
	const searchText = useSelector(state => state.search.searchText);

	useEffect(() => {
		const errorShowTimer = setTimeout(() => {
			if (countriesList.length === 0) {
				setShowField(true)
			}
		}, 5000);

		return () => clearTimeout(errorShowTimer);
	}, [searchText]);

	return (
		<div className='countries searchedCountries'>
			<h2>
				{
					showField ? `Unknown country: '${searchText}'` :
					`Search${ countriesList.length ? 'ed' : 'ing..' }`
				}
			</h2>

			<div className='searchedBox'>
				{
					countriesList.map((item, i) => 
						<Country 
							data={ item }
							key={ i }
						/>
					)
				}
			</div>
		</div>
	)
}
