import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';

export default function Country({ data }) {
	return (
		<div className='countryShort'>
			<Link to={`/country/${ data.ccn3}`}>
				<img src={ data.flags.png } alt="img" />
				<h3 className='countryH3'>{ data.name.common }</h3>
			</Link>
		</div>
	)
}