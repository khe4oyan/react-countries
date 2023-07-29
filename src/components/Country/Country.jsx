import React from 'react'
import { Link } from 'react-router-dom';
import s from './Country.module.css';

export default function Country({ data, ind }) {
	return (
		<Link to={`/country/${ ind }`}>
			<div className={ s.country }>
				<img src={ data.flags.png } alt="" />
				<h3 className={s.countryH3}>{ data.name.common }</h3>
			</div>
		</Link>
	)
}