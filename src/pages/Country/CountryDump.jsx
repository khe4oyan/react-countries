import React from 'react'
import Map from '../../components/Map/Map'
import './Country.css'

export default function CountryDump({ data }) {
	const curr = Object.keys(data.currencies);
	
	return (
		<div className='country'>
			<header className='country__header'>
				<h1 className='country__header__title'>{ data.name.common }({ data.name.official })</h1>
				<div className='country__header__imgBox'>
					<img className='country__header__img' src={ data.flags.png } alt={ data.flags.alt } />
					<img className='country__header__img' src={ data.coatOfArms.png } alt="coatOfArms" />
				</div>
			</header>

			<div className='country__more'>
				<h2 className='country__more__capital'>Capital: { data.capital }</h2>
				<p className='country__more__curr'>Currencies: { data.currencies[curr].name } ({data.currencies[curr].symbol}): { curr }</p>
				<p className='country__more__tld'>Tld: ({data.tld})</p>
				<p className='country__more__area'>Area: { data.area }km²</p>
				<p className='country__more__timezone'>Timezone: { data.timezones }</p>
				<p className='country__more__population'>Population: { data.population}</p>
				<p className='country__more__fifa'>Fifa: { data.fifa }</p>
			</div>

			<Map 
				latitude={ data.latlng[0] } 
				longitude={ data.latlng[1] } 
				markerTitle={ data.name.official }
			/>
			<a className='country__map' href={ data.maps.googleMaps } target='blank'>open in google maps</a>
		</div>
	)
}
