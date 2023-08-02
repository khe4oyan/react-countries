import React, { useEffect, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom'
import 'resetcss_khc/index.css'
import './App.css'; 
import Main from './pages/Main/Main'
import Country from './pages/Country/Country'
import reducer from './tool/reducer';
import fetchData from './api/fetchData';

const initialState = {
	countries: [],
	text: '',
};

export const ctx = React.createContext(null);

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetchData.getAllCountries(dispatch);
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