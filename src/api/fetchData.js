import axios from "axios";

const server = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});

const fetchData = {
	getRegionCountries(regionName, dispatch) {
		server.get(`/region/${ regionName.toLowerCase() }`)
		.then(r => dispatch({ type: regionName, payload: r.data } ))
	},
	getSearchingAllCountries(text, dispatch) {
		server.get(`/name/${ text }`)
		.then(r => dispatch({ type: 'searchedCountries', payload: r.data } ))
		.catch(e => dispatch({ type: 'searchedCountries', payload: [] } ))
	},
	getCountry(ccn3, setter) {
		server.get(`/alpha/${ ccn3 }`)
		.then(r => setter(r.data[0]))
	}
};

export default fetchData;