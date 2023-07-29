import React, { useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import 'resetcss_khc/index.css'
import './App.css'; 
import Main from './pages/Main/Main'
import Country from './pages/Country/Country'
import reducer, { types } from './tool/reducer';

const instanse = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});

const initialState = {
	countries: [],
	text: '',
};

export const ctx = React.createContext(null);

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		instanse.get('/all')
		.then(r => dispatch({ type: types.GET_COUNTRIES, payload: r.data }))
	}, []);

	return (
		<div className="app">
			<ctx.Provider value={ state }>
				<Routes>
					<Route path='/' element={ <Main dispatch={ dispatch }/> }/>
					<Route path='/country/:index' element={ <Country /> }/>
				</Routes>
			</ctx.Provider>
		</div>
	);
}