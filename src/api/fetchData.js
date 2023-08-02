import axios from "axios";
import { types } from "../tool/reducer";

const server = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});

const fetchData = {
	getAllCountries(dispatch) {
		server.get('/all')
		.then(r => dispatch({ type: types.SET_SHOWED_COUNTRIES, payload: r.data }))
	},
	getSearchingAllCountries(text, dispatch) {
		server.get(`/name/${ text }`)
		.then(r => dispatch({ type: types.SET_SHOWED_COUNTRIES, payload: r.data }))
		.catch(r => dispatch({ type: types.SET_SHOWED_COUNTRIES, payload: [] }))
	},
	getRegionCountries(regionName, dispatch) {
		server.get(`/region/${ regionName.toLowerCase() }`)
		.then(r => dispatch({ type: types.SET_SHOWED_COUNTRIES, payload: r.data }))
	},
};

export default fetchData;