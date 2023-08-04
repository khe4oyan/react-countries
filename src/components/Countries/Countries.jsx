import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Countries.css';
import Country from '../Country/Country';
import fetchData from '../../api/fetchData'

export default function Countries({ regionName }) {
	const countries = useSelector(state => state.countries[regionName]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (countries.length === 0) {
			fetchData.getRegionCountries(regionName, dispatch);
		}
	}, []);

	return (
		<div className='countries'>
			<div className='countriesBox'>
				{
					countries.map((item, i) => 
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
