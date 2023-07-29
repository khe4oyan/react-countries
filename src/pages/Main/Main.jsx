import React from 'react'
import Header from '../../components/Header/Header'
import Countries from '../../components/Countries/Countries';

export default function Main({ dispatch }) {
	return (
		<div>
			<Header dispatch={ dispatch }/>
			<Countries />
		</div>
	)
}
