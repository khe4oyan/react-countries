import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountryDump from './CountryDump'
import fetchData from '../../api/fetchData';

export default function Country() {
	const { ccn3 } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData.getCountry(ccn3, setData);
	}, []);

	return (
		data !== null &&
		<CountryDump data={ data }/>
	)
}