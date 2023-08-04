import React, { useRef } from 'react'
import Header from '../../components/Header/Header'
import Countries from '../../components/Countries/Countries';
import { regions } from '../../redux/reducers/countries';
import { useSelector } from 'react-redux';
import SearchedCountries from '../../components/SearchedCountries/SearchedCountries'
import './Main.css'

export default function Main() {
	const { searchText, searchedCountries } = useSelector(state => state.search);

	const regionsRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];

	return (
		<div>
			<Header 
				regionsRefs={regionsRefs}
			/>

			<h1> - Countries - </h1>
			{
				searchText !== '' ?
				<SearchedCountries 
					countriesList = { searchedCountries }
				/> :
				regions.map((item, i) => 
					<div key={ i }>
						<h2 ref={ regionsRefs[i] } className='regionHeaderText'>{ item }</h2>
						<Countries 
							regionName={ item }
						/>
					</div>
				)
			}
		</div>
	)
}