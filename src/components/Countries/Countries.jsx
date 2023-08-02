import React, { useContext } from 'react'
import s from './Countries.module.css';
import Country from '../Country/Country';
import { ctx } from '../../App';

export default function Countries() {
	const { countries, text } = useContext(ctx);

	return (
		<div className={ s.countries }>
			<h1>Countries</h1>
			<div className={ `${ s.countriesBox } ${ text !== '' && s.search }` }>
				{
					countries.map((item, i) => 
						<Country key={ i } ind={ i } data={ item } />
					)
				}
			</div>
		</div>
	)
}
