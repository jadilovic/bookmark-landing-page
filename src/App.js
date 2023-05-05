import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<h1>Home Page</h1>
		</div>
	);
}

export default App;
