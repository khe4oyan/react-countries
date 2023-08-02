import React from 'react'
import { Link } from 'react-router-dom';
import s from './Country.module.css';

export default function Country({ data, ind }) {
	return (
		<div className={ s.country }>
			<Link to={`/country/${ ind }`}>
				<img src={ data.flags.png } alt="" />
				<h3 className={s.countryH3}>{ data.name.common }</h3>
			</Link>
		</div>
	)
}