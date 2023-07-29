import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ctx } from '../../App'
import CountryDump from './CountryDump'

export default function Country() {
	const { index } = useParams();
	const data = useContext(ctx).countries[index];

	return (
		data !== undefined &&
		<CountryDump data={ data }/>
	)
}