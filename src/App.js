import React from 'react';
import { Routes, Route } from 'react-router-dom'
import 'resetcss_khc/index.css'
import './App.css'; 
import Main from './pages/Main/Main';
import Country from "./pages/Country/Country";

export default function App() {
	return (
		<div className="app">
			<Routes>
				<Route path='/' element={ <Main /> }/>
				<Route path='/country/:ccn3' element={ <Country /> }/>
			</Routes>
		</div>
	);
}