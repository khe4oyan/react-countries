import React, { useContext } from 'react'
import s from './Countries.module.css';
import Country from '../Country/Country';
import { ctx } from '../../App';

export default function Countries() {
	const { countries, text } = useContext(ctx);

	const showedCountries = [];

	if (text === '') {
		for (let i = 0; i < countries.length; ++i) {
			showedCountries.push(<Country key={ i } ind={ i } data={ countries[i]} />);
		}
	} else {
		for (let i = 0; i < countries.length; ++i) {
			if (countries[i].name.common.toUpperCase().includes(text.toUpperCase())) {
				showedCountries.push(<Country key={ i } ind={ i } data={ countries[i]} />);
			}
		}
	}

	return (
		<div className={ s.countries }>
			<h1>Countries</h1>
			<div className={ `${ s.countriesBox } ${ text !== '' && s.search }` }>
				{ showedCountries }
			</div>
		</div>
	)
}
